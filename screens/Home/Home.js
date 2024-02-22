

import React, { useEffect, useState } from 'react';
import style from './style';
import { FlatList, Image, Pressable, ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import globalStyle from '../../assets/styles/globalStyle';
import { UseSelector, useDispatch, useSelector } from 'react-redux';
import Header from '../../components/Header/Header';
import { resetToInitialState, updateFirstName } from '../../redux/reducers/User';
import Search from '../../components/Search/Search';
import Tab from '../../components/Tab/Tab';
import { updateSelectedCategoryId } from '../../redux/reducers/Categories';


const Home = () => {
    const user = useSelector(state => state.user);
    const categories = useSelector(state => state.categories);
    const dispatch = useDispatch();
    // console.log(user.firstName = 'Hanafi');
    // dispatch(resetToInitialState());
    // console.log(categories);
    const [categoryPage, setCategoryPage] = useState(1);
    const [categoryList, setCategoryList] = useState([]);
    const [isLoadingCats, setIsLoadingCats] = useState(false);
    const categoryPageSize = 4;

    useEffect(() => {
        setIsLoadingCats(true);
        setCategoryList(pagination(categories.categories,categoryPage,categoryPageSize));
        setCategoryPage(prev => prev + 1);
        setIsLoadingCats(false);
    },[])

    const pagination = (items, pageNumber, pageSize) => {
        const startIndex = (pageNumber - 1) * pageSize;
        const endIndex = startIndex + pageSize;
        if(startIndex >= items.length){
            return [];
        }
        return items.slice(startIndex,endIndex);
    }
    
    return (
        <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.header}>
                    <View>
                        <Text style={style.headerIntroText} >Hello, </Text>
                        <View style={style.username}>
                            <Header title={user.firstName + ' ' + user.lastName[0] + '.👋'} color={'#000000'} />
                        </View>
                    </View>
                    <View>
                        <Image source={{ uri:user.profileImage }} style={style.profileImage} resizeMode='contain' />
                    </View>
                </View>
                <View style={style.searchBox}>
                    <Search />
                </View>
                <Pressable style={style.highlightedImageContainer}>
                    <Image style={style.highlightedImage} source={require('../../assets/images/highlighted_image.png')} resizeMode='contain' />
                </Pressable>
                <View style={style.categoryHeader}>
                    <Header title={"Select Category"} type={2} color={'#000000'}/>
                </View>
                <View style={style.categories}>
                    <FlatList 
                    onEndReachedThreshold={0.5}
                    onEndReached={() => {
                        if(isLoadingCats) return;
                        console.log('reach end,get more data', categoryPage)
                        setIsLoadingCats(true);
                        let newData = pagination(categories.categories, categoryPage, categoryPageSize);
                        if(newData.length > 0){
                            setCategoryList(prevState => [...prevState, ...newData]);
                            setCategoryPage(prevState => prevState + 1);
                        }
                        setIsLoadingCats(false);
                    }}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categoryList} renderItem={({item}) => (
                        <View  key={item.categoryId} style={style.categoryItem}>
                            <Tab 
                            tabId={item.categoryId}
                            title={item.name} 
                            isInactive={item.categoryId !== categories.selectedCategoryId} 
                            onPress={(value) => dispatch(updateSelectedCategoryId(value))}
                            />
                        </View>
                    )}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>
    );
}

export default Home;