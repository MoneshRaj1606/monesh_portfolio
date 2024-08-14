import React from 'react';
import Navi from './components/Navi';
import Footer from './Footer';
import Heroimg2 from './components/Heroimg2';
import Form from './components/Form';

const Contant = () => {
  return (
    <div>
     <Navi />
     <Heroimg2  heading="CONTACT." text="Lets have a chat"/>
     <Form />
     <Footer />
    </div>
  )
}

export default Contant