import { CardActionArea, TextField } from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Swal from 'sweetalert2';

const MobileCard = () => {
    const [data, setData] = useState([]);
    const [search, setSearch] = useState('');
    const apiUrl = 'https://mobile-sell-server.vercel.app/mobileData';

    useEffect(() => {
        fetch(apiUrl)
            .then(res => res.json())
            .then(data => {
                setData(data)
            })
    }, []);

    const handleAddToCart = (product) => {
        console.log('Product added to the cart:', product);
        axios.post('https://mobile-sell-server.vercel.app/cartData', product)
            .then(res => {
                console.log(res.data);
                Swal.fire({
                    
                    icon: "success",
                    title: "Add To cart",
                    showConfirmButton: false,
                    timer: 1500
                });
            })
            .catch(error => {
                console.error('Error:', error);
            });
    };

    const handleSearchChange = (event) => {
        setSearch(event.target.value);
    };

    const filteredData = data.filter(mobile =>
        mobile.name.toLowerCase().includes(search.toLowerCase()) ||
        mobile.type.toLowerCase().includes(search.toLowerCase()) ||
        mobile.processor.toLowerCase().includes(search.toLowerCase()) ||
        mobile.memory.toLowerCase().includes(search.toLowerCase()) ||
        mobile.os.toLowerCase().includes(search.toLowerCase()) ||
        mobile.price.toString().includes(search) 
    );

    return (
        <div className='mb-10'>
            <div className='flex justify-end mt-5 mb-5'>
                <TextField
                    id="outlined-search"
                    label="Search mobiles"
                    type="search"
                    value={search}
                    onChange={handleSearchChange}
                />
            </div>
            <div className='max-w-[1600px] mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:ml-6 p-2 mx-auto'>
                    {filteredData.map(mobile =>
                        <Card key={mobile._id} sx={{ maxWidth: 500, paddingX: 1, paddingY: 1 }}>
                            <CardActionArea sx={{ height: 530, paddingX: 1, paddingY: 1 }}>
                                <CardMedia
                                    component="img"
                                    height="140"
                                    image={mobile.image}
                                    alt="mobile"
                                />
                                <CardContent>
                                    
                                    <div className='flex justify-between items-center'>
                                    <Typography gutterBottom variant="h5" component="div">
                                        {mobile.name}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary" sx={{
                                        ontSize: '14px', 
                                        color: "white", 
                                        backgroundColor: "#30b734", 
                                        padding: "8px",  
                                        borderRadius: "10px",
                                        font: 'bold',
                                        display: "inline-block"
                                    }}>
                                        {mobile.type}
                                    </Typography>
                                    </div>
                                    <Typography variant="body1" color="text.secondary">
                                        Price:${mobile.price}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Processor: {mobile.processor}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        Ram: {mobile.memory}
                                    </Typography>
                                    <Typography variant="body2" color="text.secondary">
                                        OS: {mobile.os}
                                    </Typography>
                                    
                                </CardContent>
                            </CardActionArea>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={() => handleAddToCart(mobile)}
                                style={{ marginTop: '20px', marginLeft: '10px' }}
                            >
                                Add to Cart
                                <ShoppingCartIcon></ShoppingCartIcon>
                            </Button>
                        </Card>
                    )}
                </div>
            </div>
        </div>
    );
};

export default MobileCard;
