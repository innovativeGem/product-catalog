import Tab from "@material-ui/core/Tab";

function a11yProps(index) {
    return {
      id: `scrollable-auto-tab-${index}`,
      "aria-controls": `scrollable-auto-tabpanel-${index}`,
    };
  }

function CategoryItem({category, id}) {
    return <Tab label={category.name} {...a11yProps(category.id)} />
};

export default CategoryItem;