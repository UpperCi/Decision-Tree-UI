import { DataHandler } from './data.js';

const dataHandler = new DataHandler();

function start() {
    document.getElementById('fetch-url-data').addEventListener('click', 
    () => dataHandler.getUrl(document.getElementById('url-input').value));
    document.getElementById('data-ratio').addEventListener('change',
    () => updateRatio());
    document.getElementById('train-btn').addEventListener('click',
    () => dataHandler.train());
    document.getElementById('test-btn').addEventListener('click',
    () => dataHandler.test());
    document.getElementById('download-btn').addEventListener('click',
    () => dataHandler.download());
    document.getElementById('tree-file').addEventListener('change',
    () => dataHandler.upload());
    dataHandler.init();
    
    //jank
    document.getElementById("input-type-url").addEventListener('change', () => updateDataType()); 
    document.getElementById("input-type-text").addEventListener('change', () => updateDataType()); 
    document.getElementById("input-type-text").click(); 
    document.getElementById("input-type-url").click(); 

    document.getElementById("text-confirm").addEventListener('click', 
    () => dataHandler.handleData(document.getElementById("text-input").value));
}

function updateDataType() {
    let datatype = document.querySelector("input[name='input-type']:checked").value;
    if (datatype == 'text') {
        document.getElementById('url-input-wrapper').style.display = 'none';
        document.getElementById('text-input-container').style.display = 'block';
    } else {
        document.getElementById('url-input-wrapper').style.display = 'flex';
        document.getElementById('text-input-container').style.display = 'none';
    }
}

function updateRatio() {
    let ratio = document.getElementById('data-ratio').value;
    let ratioDesc = document.getElementById('ratio-desc');
    ratioDesc.innerText = `Traindata: ${ratio}% - TestData: ${100 - ratio}%`;
}

window.addEventListener('load', () => {start()});
