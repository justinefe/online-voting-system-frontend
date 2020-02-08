import React, { Fragment, useState } from 'react';
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';

// export 

const TopBarItems = ({ items }) => {
    const [collapsed, setCollapsed] = useState(true);

    const toggleCollapse = () => {
      setCollapsed(prevValue => !prevValue);
    };
  
    const onClick = (e) => {
      if (Array.isArray(items)) {
        toggleCollapse();
      }
      if (onClickProp) {
        onClickProp(e, item);
      }
    };
  
    let expandIcon;  
    if (Array.isArray(items) && items.length) {
      expandIcon = !collapsed ? (
        <ArrowDropUpIcon />
      ) : (
        <ArrowDropDownIcon />
      );
    }
    const UnoderLi =  items.map(list=> 
      <li onClick={onClick} style={{listStyle: 'none', display: 'inline'}}>
                { list.name}
                {expandIcon}
            </li>
      )

    return (
            <Fragment>
            { UnoderLi }
            
            </Fragment>
    )
}


export default TopBarItems;

// { collapsed && Array.isArray(items.lists) ? (
//   <List>
//   { items.map((subItem, index) => (
//     <ListItem key={`${subItem.name}${index}`}>{ subItem}</ListItem>
//       // <OptionsItems key={`${subItem.name}${index}`} subItem={subItem}/>                             
//    ))
//   }
// </List> 
// ) : (null) 
// }