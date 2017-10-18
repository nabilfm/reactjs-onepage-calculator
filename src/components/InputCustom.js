import React from 'react';
import InputFormat from 'react-input-format';

const InputCustom = (props) =>{
    return(
        <div className="row">
            <div className="col s4 m4 l3 right-align" style={props.styleLabel}>
                <span>{props.textInput}</span>
            </div>
            <div className="input-field col s6 m6 l6">
                {/*<InputFormat*/}
                    {/*className="right-align"*/}
                    {/*format="thousand-separated"*/}
                    {/*onChange={props.onChange}*/}
                    {/*// value={this.state.hargaMobil}*/}
                    {/*value={props.value}*/}
                    {/*type={props.type}*/}
                    {/*step={props.step}*/}
                    {/*disabled={props.disabled}*/}
                    {/*style={props.styleInput}*/}
                    {/*// onChange={e => {console.log(e)}}*/}
                {/*/>*/}
                <input
                    className="right-align"
                    // onChange={this.handleChangeHM}
                    onChange={props.onChange}
                    // value={this.state.hargaMobil}
                    value={props.value}
                    type={props.type}
                    step={props.step}
                    disabled={props.disabled}
                    style={props.styleInput}
                />
            </div>
            <div className="col s2 m2 l3" style={props.styleSatuan}>
                <span>{props.satuan}</span>
            </div>
        </div>
    )
}
export default InputCustom;