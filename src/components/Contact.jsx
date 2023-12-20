'use client';
import { Map, Marker } from "pigeon-maps"

import { Button, Label, TextInput, Textarea } from 'flowbite-react';
const Contact = () => {
    return (
        <div className='mt-32 mb-5'>
            <div className="w-500">
            <Map height={500} defaultCenter={[50.879, 4.6997]} defaultZoom={11}>
            <Marker width={90} anchor={[50.879, 4.6997]} />
            </Map>
            </div>
            <div className="flex flex-col lg:flex-row justify-evenly mt-6">   
            
            <div>
                <img className="w-[500px]" src="https://i.ibb.co/nM4HPwH/contact-1.png" alt="" />
            </div>
            <div className="w-full lg:w-[500px]">
                <h2 className="text-2xl font-semibold mb-3">Leave us a Message</h2>
          <form className="flex w-full flex-col gap-4 border rounded-lg p-4">
            <div className="mb-4">
              <Label htmlFor="username">Your Name</Label>
              <TextInput
                id="username"
                placeholder="Bonnie Green"
                required
               
              />
            </div>
            <div className="mb-4">
              <Label htmlFor="email">Your Email</Label>
              <TextInput id="email" type="email" placeholder="Your Email" required />
            </div>
            <div className="mb-4">
              <Label htmlFor="comment">Your Message</Label>
              <Textarea id="comment" placeholder="Leave a comment..." required rows={4} />
            </div>
            <Button type="submit">Submit</Button>
          </form>
        </div>
        </div>
        </div>
    );
};

export default Contact;