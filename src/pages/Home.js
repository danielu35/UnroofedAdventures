import home from './Home.module.css';

export default function Home() {
    return (
        <div className={home.home}>
            <div className={home.banner}>
                <h1 className={home.inventory}>OUR INVENTORY</h1>
                <p className={home.hook}>Best Products, Competative Prices</p>
            </div>
            <div className={home.demo}>
                <section className={home.section1}>
                    <img src='/home-images/whitecar.webp' alt='white car' />
                    <h3 className={home.tentStyles}>ONTARIO 4</h3>
                    <p className={home.description}>New Addition</p>
                    <button className={home.section1Button}>Buy Now!</button>
                </section>

                <section className={home.section2}>
                    <img src='/home-images/tent.webp' alt='tent' />
                    <h3 className={home.tentStyles}>BONANZA 2</h3>
                    <p className={home.description}>Featured Item</p>
                    <button className={home.section2Button}>Buy Now!</button>
                </section>

                <section className={home.section3}>
                    <img src='/home-images/4runner.webp' alt='4runner' />
                    <h3 className={home.tentStyles}>MINER 2</h3>
                    <p className={home.description}>Custom Favorite</p>
                    <button className={home.section3Button}>Buy Now!</button>
                </section>

                <section className={home.section4}>
                    <img src='/home-images/truck-with-tent.webp' alt='truck and tent' />
                    <h3 className={home.tentStyles}>OLYMPUS 2</h3>
                    <p className={home.description}>Hutch Favorite</p>
                    <button className={home.section4Button}>Buy Now!</button>
                </section>

            </div>

            <div className={home.ourStory}>
                <hi className={home.our}>OUR STORY</hi>
                <p className={home.story}>
                Unroofed Adventures wants to include new and other brands that are making the outdoors great.
                We want to accomplish this by sharing rooftop tents and how they can give you a new sense of 
                freedom to fully enjoy what nature has to offer. The outdoors for me have always been an escape 
                to recharge and see things more clearly. Going out and enjoying that freedom has led me to further 
                this passion and make it something to live for. Unroofed Adventures will also be including rooftop 
                rentals in the Southeast Idaho area.
                </p>
            </div>
        </div>
    )
}