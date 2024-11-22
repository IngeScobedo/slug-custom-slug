/**
 *
 * PluginIcon
 *
 */

import React from 'react';
import { Link } from "@strapi/icons";


const PluginIcon = () => {
  const theme = localStorage.getItem('STRAPI_THEME');
  const iconStyle = {
    // color: theme ==='light' ?  '' : 'rgb(240, 240, 255)',
    // backgroundColor: theme ==='light' ?  '' : 'rgb(240, 240, 255)',
  };

  return <Link style={iconStyle} />;
};

export default PluginIcon;
