import React, { Component } from 'react';
import { createForm } from 'rc-form';

import App from './../components/App';
import ChoosePlatform from './../components/choosePlatform';
import Footer from './../components/Footer';
const footerarr = [
  {"name":"注册若有疑问，可咨询嘀友："},
  {"name":"电话：021-20250628"},
  {"name":"微信：diuber001"},
];
import 'antd-mobile/dist/antd-mobile.css';

class Apps extends Component {
  render() {
    const { getFieldProps } = this.props.form;
    return (
      <div style={{maxWidth:'100%'}}>
        <ChoosePlatform />
        <App />
        <Footer arrList = {footerarr}/>
      </div>
    );
  }
}

const shenzhou = createForm()(Apps);
export default shenzhou;
