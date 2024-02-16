import './AppOfTheYear.css'

function AppOfTheYear () {
    const logo = "./HikeLove.webp"
    return (
        <div className="AppOfTheYear">
            <h1>App of the Year!</h1>
            <img src={logo} alt="hiking-logo" className="hiking-logo"/>
            <h2>Hikelove is the award winning hiking app</h2>
            <h3>Download here</h3>
            <img src="./appStoreIos.gif" alt="App-store-download-icon" />
            <img src="./appStoreAndroid.gif" alt="App-store-download-icon" />
        </div>
    )
}

export default AppOfTheYear