import React, { ReactElement, ReactNode } from "react";
import {
  View,
  StyleSheet,
  Image,
  ImageProps,
  Text,
  TouchableHighlight,
  TouchableHighlightProps,
} from "react-native";
import Swipeable from "react-native-gesture-handler/Swipeable";
import colors from "../../config/colors";

interface IListItem extends TouchableHighlightProps {
  title: string;
  subTitle?: string;
  image?: ImageProps;
  renderRightActions?: () => ReactNode;
  ImageComponent?: ReactElement;
}

const ListItem = ({
  title,
  subTitle,
  image,
  onPress,
  renderRightActions,
  ImageComponent,
}: IListItem) => {
  return (
    <Swipeable renderRightActions={renderRightActions}>
      <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
        <View style={styles.container}>
          {ImageComponent}
          {image && <Image style={styles.image} source={image} />}
          <View style={styles.detailsContainer}>
            <Text style={[styles.title]}>{title}</Text>
            {subTitle && <Text style={styles.subTitle}>{subTitle}</Text>}
          </View>
        </View>
      </TouchableHighlight>
    </Swipeable>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    padding: 15,
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginRight: 10,
  },
  detailsContainer: {
    marginLeft: 10,
    justifyContent: "center",
  },
  subTitle: {
    color: colors.medium,
  },
  title: {
    fontWeight: "500",
  },
});

export default ListItem;
