import { useState, useEffect } from 'react';
import * as React from 'react';
import {
  StyleSheet,
  View,
  Text,
  Image,
  TouchableOpacity,
  TextInput,
  FlatList,
  Dimensions,
  ImageBackground,
  Linking, Alert //sửa
} from 'react-native';
import 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';
import DropdownMenu from 'react-native-dropdown-menu';
import AutoHeightImage from 'react-native-auto-height-image';
import Constant from '../constant/Constant';
//import ProductDetailScreen from '../components/ProductDetailScreen';


const BANNER =
  'https://dankocity.nhadat86.vn/wp-content/uploads/2019/10/cv.jpg';
function Header(props) {
  return (
    <View style={styles.header}>
      <Text style={styles.headertext}>
        1/7 - 31/7 > Giá trung bình: {props.cost_average}
      </Text>
    </View>
  );
}

function Item(props) {
  const newLocal = {
    backgroundColor: '#ecfdfa',
    marginTop: props.index === 0 ? 0 : 16,
  };
  return (
    <TouchableOpacity
      style={newLocal}
      activeOpacity={0.9}
      onPress={() => props.nav.navigate(Constant.SearchResultScreen.goTo)}>
      <View>
        <AutoHeightImage
          width={Dimensions.get('window').width}
          source={{ uri: props.image }}
          //source={Constant.SearchResultScreen.banner}
        />
        <Text style={styles.itemtext}>{props.price}</Text>
      </View>
      <View style={{ padding: 8 }}>
        {/* <Text style={styles.addresstext}>{props.address}</Text> */}
        <View style={styles.detailinformation}>
          <View style={styles.detail}>
            <Text style={{ marginRight: 5 }}>{props.number_bedroom}</Text>
            <Image
              style={{ marginRight: 5 }}
              source={Constant.SearchResultScreen.bedroom}
            />
            <Text style={{ marginRight: 5 }}>{props.number_bathroom}</Text>
            <Image
              style={{ marginRight: 5 }}
              source={Constant.SearchResultScreen.bathroom}
            />
            <Text>{props.area}</Text>
          </View>

          <View style={styles.date}>
            <Text>{props.date}</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default function SearchResultScreen({ navigation }) {
  const [valueSearch, onChangeTextSearch] = useState('');
  const [valueMenu, onChangeTextMenu] = useState('');
  const [cost_average, setCost_average] = useState('');
  const [error, setError] = useState('');
  const [search, setSearch] = useState([]);
  useEffect(async () => {
    const respone = await fetch("https://barrierbreakerapi.herokuapp.com/?district=ba%20%C4%91%C3%ACnh&min_price=0&max_price=500000000000&page=1");
    if (respone == 'error') {
      setError('error')
    }
    const data = await respone.json();
    const cost_result = data.average;
    const listData = data.list_data
    setCost_average(cost_result);
    setSearch(listData);


  }, [])


  var data = [
    [
      'Phường',
      'Cống Vị',
      'Điện Biên', 'Đội Cấn', 'Giảng Võ', 'Kim Mã', 'Liễu Giai', 'Ngọc Hà', 'Ngọc Khánh', 'Nguyễn Trung Trực', 'Phúc Xá', 'Quán Thánh', 'Thành Công', 'Trúc Bạch', 'Vĩnh Phúc'],
    ['Đường',
      'An Xá',
      'Bà Huyện Thanh Quan',
      'Bắc Sơn',
      'Bưởi',
      'Cao Bá Quát',
      'Cầu Giấy',
      'Châu Long',
      'Chu Văn An',
      'Chùa Một Cột',
      'Cửa Bắc',
      'Đặng Dung',
      'Đặng Tất',
      'Đào Tấn',
      'Điện Biên Phủ',
      'Độc Lập',
      'Đốc Ngữ',
      'Đội Cấn',
      'Đội Nhân',
      'Giang Văn Minh',
      'Giảng Võ',
      'Hàng Bún',
      'Hàng Đậu',
      'Hàng Than',
      'Hoàng Diệu',
      'Hoàng Hoa Thám',
      'Hoàng Văn Thụ',
      'Hòe Nhai',
      'Hồng Hà',
      'Hồng Phúc',
      'Hùng Vương',
      'Huỳnh Thúc Kháng',
      'Khúc Hạo',
      'Kim Mã',
      'Kim Mã Thượng',
      'La Thành',
      'Lạc Chính',
      'Láng Hạ',
      'Lê Duẩn',
      'Lê Hồng Phong',
      'Lê Trực',
      'Liễu Giai',
      'Linh Lang',
      'Lý Nam Đế',
      'Mạc Đĩnh Chi',
      'Mai Anh Tuấn',
      'Nam Cao',
      'Nam Tràng',
      'Nghĩa Dũng',
      'Ngọc Hà',
      'Ngọc Khánh',
      'Ngũ Xã',
      'Nguyễn Biểu',
      'Nguyễn Cảnh Chân',
      'Nguyễn Chí Thanh',
      'Nguyễn Công Hoan',
      'Nguyên Hồng',
      'Nguyễn Khắc Hiếu',
      'Nguyễn Khắc Nhu',
      'Nguyễn Phạm Tuân',
      'Nguyễn Thái Học',
      'Nguyễn Thiếp',
      'Nguyễn Tri Phương',
      'Nguyễn Trung Trực',
      'Nguyễn Trường Tộ',
      'Nguyễn Văn Ngọc',
      'Núi Trúc',
      'Ông Ích Khiêm',
      'Phạm Hồng Thái',
      'Phạm Huy Thông',
      'Phan Đình Phùng',
      'Phan Huy Ích',
      'Phan Kế Bính',
      'Phó Đức Chính',
      'Phúc Xá',
      'Quần Ngựa',
      'Quán Thánh',
      'Sơn Tây',
      'Tân Ấp',
      'Thanh Bảo',
      'Thành Công',
      'Thanh Niên',
      'Tôn Thất Đàm',
      'Tôn Thất Thiệp',
      'Trần Huy Liệu',
      'Trần Phú',
      'Trần Tế Xương',
      'Trấn Vũ',
      'Trúc Bạch',
      'Vạn Bảo',
      'Văn Cao',
      'Vạn Phúc',
      'Vĩnh Phúc',
      'Yên Ninh',
      'Yên Phụ',
      'Yên Thế'],
    ['Vị trí', 'Đông', 'Tây', 'Nam', 'Bắc', 'Đông Nam', 'Tây Nam'],
    ['Diện tích', '0 - 25 m²', '25-50m²', '50-100m²', '100-150m²', '150-200m²', '200-250m²', '250-300m²', '300-500m²'
    ],
  ];

  /*if(onPress = Constant.LocationScreen.BaDinh){
    return(
      data = [
        ['Phường', 'Thụy Khuê', 'Định Công', 'Đại Kim', 'Thanh Nhàn', 'Bạch Mai'],
        ['Đường', 'Nguyễn cảnh Dị', 'Láng', 'Minh Khai', 'Gốc Đế'],
      ]
    )
  }*/
  if (valueSearch=='123') {
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => navigation.goBack()}
            style={styles.iconback}>
            <Icon
              name="chevron-left"
              size={30}
              color="black"
              style={{ textAlign: 'center', marginTop: 10 }
              } />
          </TouchableOpacity>
          <TextInput
            placeholder="Tìm địa điểm, căn hộ chung cư..."
            style={{ height: 50, borderColor: '#468684', borderWidth: 1, flex: 8 }}
            onChangeText={(text) => onChangeTextSearch(text)}
            value={valueSearch}
          />
        </View>
        <View style={{ flex: 1 }}>
          {/* Filter bar */}
          <DropdownMenu
            bgColor={'#ecfdfa'}
            tintColor={'#666666'}
            activityTintColor={'#238778'}
            handler={(selection, row) =>
              onChangeTextMenu({ text: data[selection][row] })
            }
            data={data}>
            <TouchableOpacity
              onPress={() => Linking.openURL('http://www.google.com.vn/')}>
              {/*sửa*/}
              {/* <AutoHeightImage
              width={Dimensions.get('window').width}
              height={100}
              source={{uri: BANNER}}
            /> */}
            </TouchableOpacity>

            <ImageBackground
              source={require('../assets/notfound.png')} style={styles.image_error}
            >
              <Text style={styles.texterror}>Thật đáng tiếc! Chúng tôi không tìm thấy căn hộ mà bạn đã chọn</Text>
            </ImageBackground>

          </DropdownMenu>
        </View>
      </View>
    );
  }
  
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={styles.iconback}>
          <Icon
            name="chevron-left"
            size={30}
            color="black"
            style={{ textAlign: 'center', marginTop: 10 }}
          />
        </TouchableOpacity>
        <TextInput
          placeholder="Tìm địa điểm, căn hộ chung cư..."
          style={{ height: 50, borderColor: '#468684', borderWidth: 1, flex: 8 }}
          onChangeText={(text) => onChangeTextSearch(text)}
          value={valueSearch}
        />
      </View>
      <View style={{ flex: 1 }}>
        {/* Filter bar */}
        <DropdownMenu
          bgColor={'#ecfdfa'}
          tintColor={'#238778'}
          activityTintColor={'#238778'}
          handler={(selection, row) =>
            onChangeTextMenu({ text: data[selection][row] })
          }
          data={data}>
          <TouchableOpacity
            onPress={() => navigation.navigate(Constant.WebviewScreen.goTo)}>
            <AutoHeightImage
              width={Dimensions.get('window').width}
              height={100}
              source={{ uri: BANNER }}
            />
          </TouchableOpacity>

          {/* Label List */}
          <Text
            style={{
              fontSize: 18,
              marginVertical: 8,
              color: '#468684',
              marginLeft: 8,
            }}>
            Danh sách phù hợp
          </Text>

          {/* Danh sách địa chỉ */}
          <FlatList
            ListHeaderComponent={() => <Header cost_average={cost_average} />}
            data={search}
            renderItem={({item}) => (
              <Item
                price={item.price}
                number_bedroom={item.number_bedroom}
                number_bathroom={item.number_bathroom}
                date={item.date}
                area={item.area}
                image={item.image}
                nav={navigation}
              />
            )}
             keyExtractor={(_, i) => i.toString()}
             
          />
        </DropdownMenu>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ecfdfa',
  },

  header: {
    flexDirection: 'row',
  },
  iconback: {
    backgroundColor: '#468684',
    height: 50,
    width: 50,
  },

  headertext: {
    marginTop: 5,
    marginBottom: 5,
    fontWeight: 'bold',
    fontFamily: 'UVN Sach Vo',
    color: '#468684',
    fontSize: 15
  },

  itemtext: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    color: 'white',
    fontWeight: 'bold',
    backgroundColor: '#00aa97',
    padding: 8,
    borderRadius: 20,
    fontFamily: 'UVN Sach Vo',
  },

  addresstext: {
    marginTop: 2,
    marginBottom: 8,
    marginLeft: 5,
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: 'UVN Sach Vo',
    color: '#468684',

  },

  detailinformation: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 5,
  },

  detail: {
    flex: 1,
    flexDirection: 'row',
    marginLeft: 5,
  },

  date: {
    flex: 1,
    alignItems: 'flex-end',
    marginRight: 5,
    fontFamily: 'UVN Sach Vo',
    //fontFamily: "vincHand",
    fontWeight: "bold",
  },
  dataList: {
    fontFamily: 'UVN Sach Vo',
  },
  image_error: {
    flex: 1,
    resizeMode: "cover",
    marginBottom: 200,
    justifyContent: "center"
  },
  texterror: {
    fontSize: 25,
    marginTop: 500,
    marginLeft: 30,
    color: '#74928e',
    fontWeight: 'bold'
  }

});
