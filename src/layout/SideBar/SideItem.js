import React from 'react';
import { NavLink } from 'react-router-dom';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Divider from '@material-ui/core/Divider';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import Collapse from '@material-ui/core/Collapse';
import './SideBar.scss';

const SidebarItem = ({
  depthStep = 10, depth = 0, item, ...rest
}) => {
  const [collapsed, setCollapsed] = React.useState(true);
  const {
    label, items, Icon, onClick: onClickProp,
  } = item;
  // console.log(label, '=====>lab', items, '====> item');
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

  // const onDashboard = () => <Link to="/dashboard" />;

  let expandIcon;

  if (Array.isArray(items) && items.length) {
    expandIcon = !collapsed ? (
      <ExpandLessIcon
        className="sidebar-item-expand-arrow sidebar-item-expand-arrow-expanded"
      />
    ) : (
      <ExpandMoreIcon className="sidebar-item-expand-arrow" />
    );
  }

  return (
    <React.Fragment>
      <ListItem
        className="sidebar-item"
        onClick={onClick}
        button
        dense
        {...rest}
      >
        <div
          style={{ paddingLeft: 2 * depth * depthStep }}
          className="sidebar-item-content"
        >
          {Icon && <Icon className="sidebar-item-icon" fontSize="small" />}
          <div className="sidebar-item-text">
            <div className="label">{label}</div>
          </div>
        </div>
        {expandIcon}
      </ListItem>
      <Collapse in={!collapsed} timeout="auto" unmountOnExit>
        {Array.isArray(items) ? (
          <List disablePadding dense>
            {items.map((subItem, index) => (
              <React.Fragment key={`${subItem.name}${index}`}>
                {subItem === 'divider' ? (
                  <Divider style={{ margin: '6px 0' }} />
                ) : (
                  <SidebarItem
                    depth={depth + 1}
                    depthStep={depthStep}
                    item={subItem}
                  />
                )}
              </React.Fragment>
            ))}
          </List>
        ) : null}
      </Collapse>
    </React.Fragment>
  );
};

const SideItem = ({
  items, depthStep, depth, expanded,
}) => (
  <div className="sidebar">
    <List>
      <NavLink to='/'> 
      <h3 className='heading text-center'>VOTING</h3>
      </NavLink>
    </List>
    <List disablePadding dense>
      {items.map((sidebarItem, index) => (
        <React.Fragment key={`${sidebarItem.name}${index}`}>
          {sidebarItem === 'divider' ? (
            <Divider style={{ margin: '6px 0' }} />
          ) : (
            <SidebarItem
              depthStep={depthStep}
              depth={depth}
              expanded={expanded}
              item={sidebarItem}
            />
          )}
        </React.Fragment>
      ))}
    </List>
  </div>
);

export default SideItem;

