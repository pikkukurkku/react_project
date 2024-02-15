import "./AppDemo.css"

function AppDemo () {
    return (
        <div className="main-container">
        <section className="text-container">
            <h2>Your new hiking companion</h2>
            <p>Free access to details of Europe's most hikeable mountain tops</p>
            <p>Daily weather forecast</p>
            <p>Location shown on map</p>
            </section>
            <section className="image-container">
            <img src="../public/iframe.png" alt="mockiPhone" />
            </section>
        </div>
    )
}


export default AppDemo;