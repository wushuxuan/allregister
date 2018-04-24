import React, { Component } from 'react';
import { Button,Radio ,message,Icon} from 'antd';
import $ from 'jquery';
import lrz from 'lrz';
import { List, InputItem, DatePicker,ImagePicker } from 'antd-mobile';
import { createForm } from 'rc-form';
import '../index.css';
const RadioGroup = Radio.Group;
const data01=[];
const data02=[];
const data03=[];
const data04=[];
const data05=[];
const data06=[];

class App extends Component {
    state = {
        driverGetDay:'',
        carRegisterTime:'',
        files01: data01,
        files02: data02,
        files03: data03,
        files04: data04,
        files05: data05,
        files06: data06,
    }
	getUrlParam =(name) =>{
            var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)"); //构造一个含有目标参数的正则表达式对象
            var r = window.location.search.substr(1).match(reg);  //匹配目标参数
            if (r != null) return unescape(r[2]); return null; //返回参数值
        }
    componentDidMount() {
		console.log($('#information').html().toString().substring(16).split(',"'))
        var newarr = $('#information').html().toString().substring(16).split(',"');
		var i = 0;
		for(i;i<newarr.length;i++){
		    var arr1 = newarr[i].split(':');
		    var arr2 = arr1[0].split('"');
            var arr3 = arr2[0].split('"')[0];//关键字
            //名字
            if(arr3 === "realName"){
		        if(arr1[1]!=='null'){
                    this.setState({
                        realName:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //性别
            if(arr3 === "gender"){
              if(arr1[1]!='null'){
                this.setState({
                  gender:arr1[1]
                })
              }
            }
            //身份证号
            if(arr3 === "idNo"){
                if(arr1[1]!=='null'){
                    this.setState({
                        idNo:arr1[1].split('"')[1]
                    })
                }
            }
            //居住地址
            if(arr3 === "homeAddress"){
                if(arr1[1]!=='null'){
                    this.setState({
                        homeAddress:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //做单手机号emergencyContact
            if(arr3 === "phoneNumber"){
                if(arr1[1]!=='null'){
                    this.setState({
                        phoneNumber:arr1[1].split('"')[1]
                    })
                }
            }
            //紧急联系人姓名
            if(arr3 === "emergencyContact"){
                if(arr1[1]!=='null'){
                    this.setState({
                        emergencyContact:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //紧急联系人手机号
            if(arr3 === "emergencyContactTel"){
                if(arr1[1]!=='null'){
                    this.setState({
                        emergencyContactTel:arr1[1].split('"')[1]
                    })
                }
            }
            //驾驶证类型
            if(arr3 === "driverType"){
                if(arr1[1]!=='null'){
                    this.setState({
                        driverType:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //驾驶证号
            if(arr3 === "driverLicense"){
                if(arr1[1]!=='null'){
                    this.setState({
                        driverLicense:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //车牌号
            if(arr3 === "licensePlate"){
                if(arr1[1]!=='null'){
                    this.setState({
                        licensePlate:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //车架号
            if(arr3 === "frameNumber"){
                if(arr1[1]!=='null'){
                    this.setState({
                        frameNumber:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //车身颜色
            if(arr3 === "carColor"){
                if(arr1[1]!=='null'){
                    this.setState({
                        carColor:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //车主
            if(arr3 === "vehicleOwn"){
                if(arr1[1]!=='null'){
                    this.setState({
                        vehicleOwn:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //车型
            if(arr3 === "carType"){
                if(arr1[1]!=='null'){
                    this.setState({
                        carType:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //发动机号
            if(arr3 === "engineNumber"){
                if(arr1[1]!=='null'){
                    this.setState({
                        engineNumber:JSON.parse('['+arr1[1]+']')
                    })
                }
            }
            //驾驶证领证日期
            if(arr3 === "driverGetDay"){
                if(arr1[1]!=='null'){
                    this.setState({
                        driverGetDay:new Date(arr1[1].split('"')[1]),
                    })
                }
            }
            //车辆注册日期this.setState({imagesrc01:files01[0].url.split(',')[1]})}
            if(arr3 === "carRegisterTime"){
                if(arr1[1]!=='null'){
                    this.setState({
                        carRegisterTime:new Date(arr1[1].split('"')[1]),
                    })
                }
            }
            //身份证正面照片this.setState({imagesrc01:files01[0].url.split(',')[1]})}
            if(arr3 === "idNoFaceUrl"){
                if(arr1[1]!=='null'){
                    var url = newarr[i].split(':"')[1].split('"')[0];
                    this.setState({
                        imagesrc01:newarr[i].split(':"')[1].split('"')[0],
                        files01:[{
                            url:url,
                            id:'01'
                        }],
                    })
                }
            }
            //驾驶证正面照片
            if(arr3 === "driverLicenseUrl"){
                if(arr1[1]!=='null'){
                    var url02 = newarr[i].split(':"')[1].split('"')[0];
                    this.setState({
                        imagesrc02:newarr[i].split(':"')[1].split('"')[0],
                        files02:[{
                            url:url02,
                            id:'01'
                        }],
                    })
                }
            }
            //行驶证照片
            if(arr3 === "vehicleLicenseUrl"){
                if(arr1[1]!=='null'){
                    var url03 = newarr[i].split(':"')[1].split('"')[0];
                    this.setState({
                        imagesrc03:newarr[i].split(':"')[1].split('"')[0],
                        files03:[{
                            url:url03,
                            id:'01'
                        }],
                    })
                }
            }
            //人车合照照片
            if(arr3 === "groupPhotoUrl"){
                if(arr1[1]!=='null'){
                    var url04 = newarr[i].split(':"')[1].split('"')[0];
                    this.setState({
                        imagesrc04:newarr[i].split(':"')[1].split('"')[0],
                        files04:[{
                            url:url04,
                            id:'01'
                        }],
                    })
                }
            }
            //交强险照片
            if(arr3 === "insuranceUrl"){
                if(arr1[1]!=='null'){
                    var url05 = newarr[i].split(':"')[1].split('"')[0];
                    this.setState({
                        imagesrc05:newarr[i].split(':"')[1].split('"')[0],
                        files05:[{
                            url:url05,
                            id:'01'
                        }],
                    })
                }
            }
            //商业险照片
            if(arr3 === "businessInsuranceUrl"){
                if(arr1[1]!=='null'){
                    var url06 = newarr[i].split(':"')[1].split('"')[0];
                    this.setState({
                        imagesrc06:newarr[i].split(':"')[1].split('"')[0],
                        files06:[{
                            url:url06,
                            id:'01'
                        }],
                    })
                }
            }
        }
    }
    handleClick = () => {
        this.customFocusInst.focus();
    }
    onChange = (e) => {
        console.log('radio checked', e.target.value);
        this.setState({
            gender: e.target.value,
        });
    }
    onImageChange01 = (files01, type, index) => {
        console.log(files01, type, index);
        if(type==='add'){
            lrz(files01[0].url, {quality:0.1})
                .then((rst)=>{
                    // 处理成功会执行
                    console.log('压缩成功')
                    console.log(rst);
                    var url = rst.base64.split(',')[1];
                    this.setState({
                        imagesrc01:url,
                    })
                })
        }else{
            this.setState({imagesrc01:''})
        }
        this.setState({
            files01,
        });
    }
    onImageChange02 = (files02, type, index) => {
        console.log(files02, type, index);
        if(type==='add'){
            lrz(files02[0].url, {quality:0.1})
                .then((rst)=>{
                    // 处理成功会执行
                    console.log('压缩成功')
                    console.log(rst.base64.split(',')[1]);
                    var url = rst.base64.split(',')[1];
                    this.setState({
                        imagesrc02:url,
                    })
                })
        }else{
            this.setState({imagesrc02:''})
        }
        this.setState({
            files02,
        });
    }
    onImageChange03 = (files03, type, index) => {
        console.log(files03, type, index);
        if(type==='add'){
            lrz(files03[0].url, {quality:0.1})
                .then((rst)=>{
                    // 处理成功会执行
                    console.log('压缩成功')
                    console.log(rst.base64.split(',')[1]);
                    var url = rst.base64.split(',')[1];
                    this.setState({
                        imagesrc03:url,
                    })
                })
        }else{
            this.setState({imagesrc03:''})
        }
        this.setState({
            files03,
        });
    }
    onImageChange04 = (files04, type, index) => {
        console.log(files04, type, index);
        if(type==='add'){
            lrz(files04[0].url, {quality:0.1})
                .then((rst)=>{
                    // 处理成功会执行
                    console.log('压缩成功')
                    console.log(rst.base64.split(',')[1]);
                    var url = rst.base64.split(',')[1];
                    this.setState({
                        imagesrc04:url,
                    })
                })
        }else{
            this.setState({imagesrc04:''})
        }
        this.setState({
            files04,
        });
    }
    onImageChange05 = (files05, type, index) => {
        console.log(files05, type, index);
        if(type==='add'){
            lrz(files05[0].url, {quality:0.1})
                .then((rst)=>{
                    // 处理成功会执行
                    console.log('压缩成功')
                    console.log(rst.base64.split(',')[1]);
                    var url = rst.base64.split(',')[1];
                    this.setState({
                        imagesrc05:url,
                    })
                })
        }else{
            this.setState({imagesrc05:''})
        }
        this.setState({
            files05,
        });
    }
    onImageChange06 = (files06, type, index) => {
        console.log(files06, type, index);
        if(type==='add'){
            lrz(files06[0].url, {quality:0.1})
                .then((rst)=>{
                    // 处理成功会执行
                    console.log('压缩成功')
                    console.log(rst.base64.split(',')[1]);
                    var url = rst.base64.split(',')[1];
                    this.setState({
                        imagesrc06:url,
                    })
                })
        }else{
            this.setState({imagesrc06:''})
        }
        this.setState({
            files06,
        });
    }
    ButtonChange = () =>{
        if($("input[name='message']").val()==='loading'){
            const hide = message.loading('正在提交申请，请稍后..', 0);
            setTimeout(hide, 25000);
        }
    }

    render() {
        const { files01 } = this.state;
        const { files02 } = this.state;
        const { files03 } = this.state;
        const { files04 } = this.state;
        const { files05 } = this.state;
        const { files06 } = this.state;
        const { getFieldProps } = this.props.form;
        return (
            <div>
                <List renderHeader={() => <text style={{color:'red'}}> * 基本信息</text>} >
                    <InputItem
                        {...getFieldProps('realName', {
                            initialValue: this.state.realName,
                        })}
                        placeholder="姓名"
                        name="realName"
                    >
                        <Icon type="user"  style={{color:'#108ee9',fontSize:'20px',width:'50px'}}/>
                    </InputItem>
                    <RadioGroup
                                value = {this.state.gender}
                                onChange = {this.onChange}
                                style={{display:'block',marginLeft:'15px',height:'44px',lineHeight:'44px',borderBottom:'1px solid #eee'}}>
                        <Icon type="man" style={{color:'#108ee9',fontSize:'20px',width:'50px',marginRight:'35px'}}/>
                        <Radio value="1" checked="">男</Radio>
                        <Radio value="0" checked="">女</Radio>
                    </RadioGroup>
                    <input onChange = {this.setChange} style={{display:'none'}} name="gender" value={this.state.gender}></input>
                    <InputItem
                        {...getFieldProps('idNo', {
                            initialValue: this.state.idNo,
                        })}
                        placeholder="身份证号"
                        name="idNo"
                    >
                        <Icon type="idcard"  style={{color:'#108ee9',fontSize:'20px',width:'50px'}}/>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('homeAddress', {
                            initialValue: this.state.homeAddress,
                        })}
                        placeholder="上海居住住址"
                        name="homeAddress"
                    >
                        <Icon type="environment-o"  style={{color:'#108ee9',fontSize:'20px',width:'50px'}}/>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('bankCard', {
                            initialValue: this.state.phoneNumber,
                        })}
                        placeholder="做单手机号"
                        type="phone"
                        name="phoneNumber"
                    >
                        <Icon type="phone"  style={{color:'#108ee9',fontSize:'20px',width:'50px'}}/>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('emergencyContact', {
                            initialValue: this.state.emergencyContact,
                        })}
                        placeholder="紧急联系人姓名"
                        name="emergencyContact"
                    >
                        <Icon type="contacts"  style={{color:'#108ee9',fontSize:'20px',width:'50px'}}/>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('emergencyContactTel', {
                            initialValue: this.state.emergencyContactTel,
                        })}
                        placeholder="紧急联系人手机号"
                        type="phone"
                        name="emergencyContactTel"
                    >
                        <Icon type="shake"  style={{color:'#108ee9',fontSize:'20px',width:'50px'}}/>
                    </InputItem>
                </List>
              <List renderHeader={() => <text style={{color:'red'}}> * 驾驶证信息( 3年以上驾龄 )</text>}>
                    <InputItem
                        {...getFieldProps('driverType', {
                            initialValue: this.state.driverType,
                        })}
                        placeholder="比如C1、A2"
                        name="driverType"
                    >驾照类型</InputItem>
                    <InputItem
                        {...getFieldProps('driverLicense', {
                            initialValue: this.state.driverLicense,
                        })}
                        name="driverLicense"
                    >
                        <div style={{width:'100px',}}>驾驶证档案编号</div>
                    </InputItem>
                    <DatePicker
                        mode="date"
                        title="驾驶证领证日期"
                        extra="请选择日期"
                        value={this.state.driverGetDay}
                        id="driverGetDay"
                        onOk = {driverGetDay => this.setState({ driverGetDay })}
                    >
                        <List.Item arrow="horizontal">驾驶证领证日期</List.Item>
                    </DatePicker>
                    <input onChange = {this.setChange} style={{display:'none'}} name="driverGetDay" value={this.state.driverGetDay}></input>
                    <DatePicker
                        mode="date"
                        title="车辆注册日期"
                        extra="请选择日期"
                        value={this.state.carRegisterTime}
                        id="driverEndTime"
                        onOk = {carRegisterTime => this.setState({ carRegisterTime })}
                    >
                        <List.Item arrow="horizontal">车辆注册日期</List.Item>
                    </DatePicker>
                    <input onChange = {this.setChange} style={{display:'none'}} name="carRegisterTime" value={this.state.carRegisterTime}></input>
                </List>
                <List
                    renderHeader={() =><text style={{color:'red'}}> * 车辆信息</text>}
                    className="driverLicense">
                    <InputItem
                        {...getFieldProps('licensePlate', {
                            initialValue: this.state.licensePlate,
                        })}
                        name="licensePlate"
                        placeholder="必须沪牌"
                    >
                        <div style={{width:'100px',}}>车牌号</div>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('frameNumber', {
                            initialValue: this.state.frameNumber,
                        })}
                        name="frameNumber"
                    >车架号</InputItem>
                    <InputItem
                        {...getFieldProps('carColor', {
                            initialValue: this.state.carColor,
                        })}
                        name="carColor"
                    >
                        <div style={{width:'100px',}}>车身颜色</div>
                    </InputItem>
                    <InputItem
                        {...getFieldProps('vehicleOwn', {
                            initialValue: this.state.vehicleOwn,
                        })}
                        name="vehicleOwn"
                    >所属车主</InputItem>
                    <InputItem
                        {...getFieldProps('carType', {
                            initialValue: this.state.carType,
                        })}
                        placeholder="比如荣威E550、丰田凯美瑞"
                        name="carType"
                    >品牌车型</InputItem>
                    <InputItem
                        {...getFieldProps('engineNumber', {
                            initialValue: this.state.engineNumber,
                        })}
                        name="engineNumber"
                    >发动机号</InputItem>
                </List>
                <List renderHeader={() => <text style={{color:'red'}}> * 照片上传 （除人车合照外，其余照片都可选上传）</text>} className="basicInformation">
                    <div style={{background:'#fff',paddingTop:'10px'}}>
                        <div className="ImageFlex">
                            <div className="ImageTitle"> 身份证正面照片：</div>
                            <p className="ImageTip"> 照片要求：清晰可见身份证上所有文字信息；</p>
                            <ImagePicker
                                files={files01}
                                onChange={this.onImageChange01}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files01.length < 1}
                                multiple={this.state.multiple}
                            />
                        </div>
                        <div className="ImageFlex">
                            <div className="ImageTitle"> 驾驶证正副本照片：</div>
                            <p className="ImageTip"> 照片要求：清晰可见驾驶证上所有文字信息；</p>
                            <ImagePicker
                                files={files02}
                                onChange={this.onImageChange02}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files02.length < 1}
                                multiple={this.state.multiple}
                            />
                        </div>
                        <div className="ImageFlex">
                            <div className="ImageTitle"> 行驶证正副本照片：</div>
                            <p className="ImageTip"> 照片要求：清晰可见行驶证上所有文字信息；</p>
                            <ImagePicker
                                files={files03}
                                onChange={this.onImageChange03}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files03.length < 1}
                                multiple={this.state.multiple}
                            />
                        </div>
                        <div className="ImageFlex">
                            <div className="ImageTitle"> 人车合照照片：</div>
                            <p className="ImageTip"> 照片要求：车前方45度角，可看到车辆整体，清晰可见车牌号，光线可分辨车身颜色；</p>
                            <ImagePicker
                                files={files04}
                                onChange={this.onImageChange04}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files04.length < 1}
                                multiple={this.state.multiple}
                            />
                        </div>
                        <div className="ImageFlex">
                            <div className="ImageTitle"> 交强险保单照片：</div>
                            <p className="ImageTip"> 照片要求：清晰可见保单中被保人信息、保单金额及保险日期；如保单涉及延期、信息变更等请上传多张；</p>
                            <ImagePicker
                                files={files05}
                                onChange={this.onImageChange05}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files05.length < 1}
                                multiple={this.state.multiple}
                            />
                        </div>
                        <div className="ImageFlex">
                            <div className="ImageTitle"> 商业险保单图片：</div>
                            <p className="ImageTip"> 照片要求：清晰可见保单中被保人信息、保单金额及保险日期；如保单涉及延期、信息变更等请上传多张；</p>
                            <ImagePicker
                                files={files06}
                                onChange={this.onImageChange06}
                                onImageClick={(index, fs) => console.log(index, fs)}
                                selectable={files06.length < 1}
                                multiple={this.state.multiple}
                            />
                        </div>
                        <input onChange = {this.setChange} style={{display:'none'}} name="preview01" value={this.state.imagesrc01} ></input>
                        <input onChange = {this.setChange} style={{display:'none'}} name="preview02" value={this.state.imagesrc02}></input>
                        <input onChange = {this.setChange} style={{display:'none'}} name="preview03" value={this.state.imagesrc03}></input>
                        <input onChange = {this.setChange} style={{display:'none'}} name="preview04" value={this.state.imagesrc04}></input>
                        <input onChange = {this.setChange}  style={{display:'none'}} name="preview05" value={this.state.imagesrc05}></input>
                        <input onChange = {this.setChange}  style={{display:'none'}} name="preview06" value={this.state.imagesrc06}></input>
                    </div>
                </List>
                <Button type = "primary"
                        id = "submit"
                        style={{width:'90%',margin:'5%',height:'45px',lineHeight:'45px'}}
                        onClick = {this.ButtonChange}
                >提交</Button>
            </div>
        );
    }
}

const shenzhou = createForm()(App);
export default shenzhou;
