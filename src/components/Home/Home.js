import React, {useState, useEffect} from 'react';
import Hero from '../../components/Hero/Hero';
import Contentbox from '../../components/Contentbox/Contentbox';
import Services from '../../components/What-we-do/Services';
import Support from '../../components/Support/Support';
import Marketing from '../../components/Marketing/Marketing';
const domain = 'http://localhost:8080';
const apiKey = '0840c98dfdd3fabea99ccbd0da7092';
const collections = `${domain}/api/collections/get/Kort${apiKey}`



function Home() {

  useEffect(() => {
    fetchCollections()

  }, [])

  const [items, setItems] = useState({});

  const fetchCollections = async () => {
    const data = await fetch(collections);
    const items = await data.json();
    console.log(items)
  }

  return (
    <section className="index__content-wrapper">
      
        <Hero />
        <Contentbox />
        <Services />
        <Support />
        <Marketing/>
    </section>
  );
}

export default Home;