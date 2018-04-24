import React, { Component } from 'react';
import $ from 'jquery';
import { Checkbox } from 'antd';
import { List } from 'antd-mobile';
import './Header.css';
const CheckboxGroup = Checkbox.Group;

const plainOptions = ['首汽', '神州', '美团','去哪儿、携程','滴滴豪华（A6以上）'];
const defaultCheckedList = [];

class ChoosePlatform extends Component{
    state = {
        platform:defaultCheckedList,
        checkedList: defaultCheckedList,
        indeterminate: true,
        checkAll: false,
    };
    componentDidMount() {
        var newarr = $('#information').html().toString().substring(16).split(',"');
        var i = 0;
        for(i;i<newarr.length;i++){
            var arr1 = newarr[i].split(':');
            var arr2 = arr1[0].split('"');
            var arr3 = arr2[0].split('"')[0];//关键字
            var arr4 = arr1[1];//值
            if(arr3==="is_shenzhou"){
                if(arr4!=='0'){
                    defaultCheckedList.push('神州')
                }
            }
            if(arr3==="is_didi"){
                if(arr4!=='0'){
                    defaultCheckedList.push('滴滴豪华（A6以上）')
                }
            }
            if(arr3==="is_shouqi"){
                if(arr4!=='0'){
                    defaultCheckedList.push('首汽')
                }
            }
            if(arr3==="is_qunaer"){
                if(arr4!=='0'){
                    defaultCheckedList.push('去哪儿、携程')
                }
            }
            if(arr3==="is_meituan"){
                if(arr4!=='0'){
                    defaultCheckedList.push('美团')
                }
            }
            //console.log(defaultCheckedList)
            this.setState({
                platform:defaultCheckedList
            })
        }
    }
    render() {
        return (
            <div>
                <List renderHeader={() => <text style={{color:'red'}}> * 希望加盟的平台 </text>} className="basicInformation">
                <div style={{ width:'95%',margin:'0 auto',borderBottom: '1px solid #E9E9E9'}}>
                    <Checkbox
                        indeterminate={this.state.indeterminate}
                        onChange={this.onCheckAllChange}
                        checked={this.state.checkAll}
                    >
                        全选 ( 只需填写一次，即可同步注册多个平台 )
                    </Checkbox>
                </div>
                <br />
                <CheckboxGroup
                    style={{paddingBottom:'5px'}}
                    options={plainOptions} value={this.state.checkedList} onChange={this.onChange} />
                </List>
                <input style={{display:'none'}} name="platform" value={this.state.platform}/>
            </div>
        );
    }
    onChange = (checkedList) => {
        console.log(checkedList)
        for(var i =0;i<checkedList.length;i++){
            if(checkedList[i]=='美团'){
                window.location.href="https://dache.meituan.com/r/fe/share?hl=3&companyId=211435"
            }
            if(checkedList[i]=='首汽'){
                window.location.href="https://monline.01zhuanche.com/driverRegister/register.html?title=%E5%8A%A0%E7%9B%9F%E9%A6%96%E6%B1%BD%E7%BA%A6%E8%BD%A6%20%E6%88%90%E5%B0%B1%E5%93%81%E8%B4%A8%E5%87%BA%E8%A1%8C&desc=%E5%9B%BD%E8%B5%84%E8%83%8C%E6%99%AF%E3%80%81%E6%B5%B7%E9%87%8F%E8%AE%A2%E5%8D%95%E3%80%81%E7%A8%B3%E5%AE%9A%E6%94%B6%E5%85%A5%EF%BC%81&appShareType=1&supplier=1130"
            }
        }
        this.setState({
            platform:checkedList,
            checkedList,
            indeterminate: !!checkedList.length && (checkedList.length < plainOptions.length),
            checkAll: checkedList.length === plainOptions.length,
        });
    }
    onCheckAllChange = (e) => {
        console.log(e.target.checked)
        this.setState({
            checkedList: e.target.checked ? plainOptions : [],
            platform: e.target.checked ? plainOptions : [],
            indeterminate: false,
            checkAll: e.target.checked,
        });
    }
}
export default ChoosePlatform;
