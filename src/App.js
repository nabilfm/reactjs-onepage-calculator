import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import InputCustom  from './components/InputCustom';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = { items: [], hargaMobil:0, uangMuka:0, sukuBunga:0, jangkaWaktu:0, angsuran:0, text: '', result:0};
        // this.handleChange = this.handleChange.bind(this);
        this.handleChangeHM = this.handleChangeHM.bind(this);
        this.handleChangeSB = this.handleChangeSB.bind(this);
        this.handleChangeUM = this.handleChangeUM.bind(this);
        this.handleChangeJW = this.handleChangeJW.bind(this);
        this.handleChangeAS = this.handleChangeAS.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        // this.calculate = this.calculate.bind(this);
    }

    render() {
        return (
            <div>
                {/*<TodoList items={this.state.items} />*/}
                <form onSubmit={this.handleSubmit}>
                    <InputCustom
                        textInput="Harga Mobil"
                        styleInput={styles.inputStyle}
                        styleLabel={styles.labelStyle}
                        onChange={this.handleChangeHM}
                        value={this.state.hargaMobil}
                        type="text"
                        satuan="Rp"
                        styleSatuan={styles.satuanStyle}
                        step="any"
                    />
                    <InputCustom
                        textInput="Uang Muka"
                        styleInput={styles.inputStyle}
                        styleLabel={styles.labelStyle}
                        onChange={this.handleChangeUM}
                        value={this.state.uangMuka}
                        type="text"
                        satuan="Rp"
                        styleSatuan={styles.satuanStyle}
                        step="any"
                    />
                    <InputCustom
                        textInput="Suku Bunga"
                        styleInput={styles.inputStyle}
                        styleLabel={styles.labelStyle}
                        onChange={this.handleChangeSB}
                        value={this.state.sukuBunga}
                        type="number"
                        satuan="%"
                        styleSatuan={styles.satuanStyle}
                        step="0.01"
                    />
                    <InputCustom
                        textInput="Jangka Waktu"
                        styleInput={styles.inputStyle}
                        styleLabel={styles.labelStyle}
                        onChange={this.handleChangeJW}
                        value={this.state.jangkaWaktu}
                        type="number"
                        satuan="Tahun"
                        styleSatuan={styles.satuanStyle}
                        step="any"
                    />
                    <div className="row center">
                        <div className="col s4 m4 l3"></div>
                        <div className="col s6 m6 l6" style={{marginLeft:'5px'}}>
                            <button className="btn waves-effect waves-light" type="submit" name="action" style={{margin: '0 auto', width:'100%'}}>
                                Hitung
                            </button>
                        </div>
                        <div className="col s4 m4 l3"></div>
                    </div>
                    <div className="row">
                        <div className="col s4 m4 l3 right-align" style={styles.angsuranStyle}>
                            <span>Angsuran</span>
                        </div>
                        <div className="input-field col s6 m6 l6">
                            <input
                                className="right-align"
                                // onChange={this.handleChangeHM}
                                onChange={this.handleChangeAS}
                                // value={this.state.hargaMobil}
                                value={this.state.angsuran}
                                type="text"
                                step="any"
                                disabled={true}
                                style={styles.inputStyle}
                            />
                        </div>
                        <div className="col s2 m2 l3" style={styles.satuanStyle}>
                            <span>Rp</span>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col s4 m4 l3"></div>
                        <div className="col s6 m6 l6 right-align"><a href="#" onClick={this.handleReset}>RESET</a></div>
                        <div className="col s4 m4 l3"></div>
                    </div>
                </form>
            </div>
        );
    }

    handleReset(e){
        this.setState({hargaMobil:0,uangMuka:0,sukuBunga:0,jangkaWaktu:0,angsuran:0})
    }
    calculate(e){
        console.log('calculating');
        console.log(this.state.hargaMobil);
        let resultVar,
            hargaMobil = this.cleanNumbers(this.state.hargaMobil),
            uangMuka = this.cleanNumbers(this.state.uangMuka),
            sukuBunga = this.state.sukuBunga,
            jangkaWaktu = this.state.jangkaWaktu,
            angsuran = this.state.angsuran;
        console.log(hargaMobil);
        console.log(uangMuka);
        console.log(sukuBunga);
        console.log(jangkaWaktu);
        resultVar = (hargaMobil-uangMuka)/(jangkaWaktu*12)+sukuBunga/12*((hargaMobil-uangMuka)/100);
        resultVar = isNaN(parseInt(resultVar)) ? 'Please input correct value': parseInt(resultVar);
        console.log('locale string: '+ resultVar.toLocaleString());
        this.setState({angsuran:resultVar.toLocaleString()});
    }

    cleanNumbers(val){
        if(val===0)return val;
        console.log('preClean: '+val);
        val = val.split(",").join("");
        console.log('cleaned: '+val);
        return val;
    }

    handleChangeHM(e){
        let hargaMobil;
        e.target.value = e.target.value ===''? 0:e.target.value;
        hargaMobil = this.cleanNumbers(e.target.value);
        console.log(hargaMobil);
        hargaMobil = Number(hargaMobil);
        console.log(hargaMobil);
        hargaMobil = hargaMobil.toLocaleString();

        console.log('locale string: '+ hargaMobil);
        this.setState({hargaMobil});
    }
    handleChangeUM(e){
        let uangMuka;
        e.target.value = e.target.value ===''? 0:e.target.value;
        uangMuka = this.cleanNumbers(e.target.value);
        console.log(uangMuka);
        uangMuka = Number(uangMuka);
        console.log(uangMuka);
        uangMuka = uangMuka.toLocaleString();

        this.setState({uangMuka});}
    handleChangeSB(e){
        e.target.value = e.target.value ===''? 0:e.target.value;
        this.setState({sukuBunga: parseFloat(e.target.value)});}
    handleChangeJW(e){
        e.target.value = e.target.value ===''? 0:e.target.value;
        this.setState({jangkaWaktu: parseInt(e.target.value)});}
    handleChangeAS(e){
        e.target.value = e.target.value ===''? 0:e.target.value;
        this.setState({angsuran: parseInt(e.target.value)});}

    handleSubmit(e) {
        e.preventDefault();
        this.calculate();
    }
}
const styles={
    labelStyle:{
        color: 'white',
        paddingTop: '1.2rem'

    },
    satuanStyle:{
        color: '#6fd6ff',
        paddingTop: '1.2rem'

    },
    angsuranStyle:{
        color: '#ffcc06',
        paddingTop: '1.2rem'

    },
    inputStyle:{
        paddingRight: '10px'
    }
}

export default App;
