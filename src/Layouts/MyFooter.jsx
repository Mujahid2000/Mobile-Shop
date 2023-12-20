'use client';

import { Footer } from 'flowbite-react';

const MyFooter = () => {
    return (
        <Footer container>
      <Footer.Copyright href="/" by="Mobile Shop" year={2023} />
      <Footer.LinkGroup>
        <Footer.Link href="#">About</Footer.Link>
        <Footer.Link href="#">Privacy Policy</Footer.Link>
        <Footer.Link href="#">Licensing</Footer.Link>
        <Footer.Link href="#">Contact</Footer.Link>
      </Footer.LinkGroup>
    </Footer>
    );
};

export default MyFooter;