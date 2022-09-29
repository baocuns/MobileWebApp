import React, {useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';


const ProvinceList = () => {
    const [categoriesProvince, setCategoriesProvince] = useState([]);
    const [open, setOpen] = useState(false);
    const [value, setValue] = useState(null);
    const [items, setItems] = useState([
      {label: 'Apple', value: 'apple'},
      {label: 'Banana', value: 'banana'}
    ]);

    const setItemCategory = (data)=>{
        let categories = [];
        data.forEach(element => {
            categories.push({
                label: element.name,
                value: element.name
            })
        });
        setItems(categories);
    }

    //get category Province
    useEffect(() => {
        axios.get(`https://provinces.open-api.vn/api/`)
            .then(res => {
                const itemCategories = res.data;
                // setCategoriesProvince(itemCategories);
                setItemCategory(itemCategories);
            })
            .catch(error => console.log(error));
        console.log('>>check provine: ', categoriesProvince[0].name);
    }, []);
  
    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
      />
    );
}

const styles = StyleSheet.create({})

export default ProvinceList;
