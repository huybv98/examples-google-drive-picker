import './App.css';

import useDrivePicker from 'react-google-drive-picker'
import {useEffect} from "react";

function App() {
    const [openPicker, data, authResponse] = useDrivePicker()

    const handleOpenPicker = () => {
        openPicker({
            clientId: "385207307636-rb7spoinh7k064fisvupclkd0l1ht3no.apps.googleusercontent.com",
            developerKey: "AIzaSyBYL7kNpfBY8foxEXIlZZZK2Kspjr47Jgw",
            viewId: "DOCS",
            token: 'ya29.a0Ad52N38dGofMQMYRDOrFWnBFXWfZhJI_VHPDefk2PPotp3w1FVWJttNlnVak8Ul2pll5QtID81U5W1-FixUOgOKCrY1iGi_VOMgAYVkJ_pKuL2PCjsGy5dolq8hR4E7gEyfCoUxUHsBBZpm_85MGqxlWnHbQbrcHoYLYaCgYKAdUSARMSFQHGX2MiAheedxcuSqhjuPGIm2yZzg0171', // pass oauth token in case you already have one
            showUploadView: true,
            showUploadFolders: true,
            supportDrives: true,
            multiselect: true,
            // customViews: customViewsArray, // custom view
            callbackFunction: (data) => {
                if (data.action === 'cancel') {
                    console.log('User clicked cancel/close button')
                }
                console.log('data',data )
            },
        })
    }

    useEffect(() => {
        if (data) {
            data.docs.map((i) => console.log('i', i))
        }
        console.log('data1',data )
    }, [data])

    return (
        <div className="App">
            <header className="App-header">
                Examples Google Drive Picker
            </header>
            <div className="App-main">
                <button className="App-button" onClick={() => handleOpenPicker()}>Open Picker</button>
            </div>
        </div>
    );
}

export default App;
