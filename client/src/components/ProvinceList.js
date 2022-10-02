import React, {useState,useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import axios from 'axios';
import { useDispatch, useSelector} from 'react-redux';
import { POSITION_SELECTED } from '../redux/reducers/infoReducer';

const ProvinceList = () => {
    const dispatch = useDispatch();
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
                setItemCategory(itemCategories);
            })
            .catch(error => console.log(error));
    }, []);
  
    return (
      <DropDownPicker
        open={open}
        value={value}
        items={items}
        setOpen={setOpen}
        setValue={setValue}
        setItems={setItems}
        onSelectItem={(item) => {
            dispatch({
                type: POSITION_SELECTED,
                item: item
            })
          }}
        autoScroll={true}
      />
    );
}

const styles = StyleSheet.create({})

export default ProvinceList;
