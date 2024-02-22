

import React from 'react';
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
    console.log(categories);
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
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    data={categories.categories} renderItem={({item}) => (
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