import React from 'react';
import { View, Text, ScrollView, Image, TouchableOpacity, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import styles from './styles';

const stories = [
  { id: 1, source: require('./images/story1.jpg'), name: 'Seu Story' },
  { id: 2, source: require('./images/story2.jpg'), name: 'Carol' },
  { id: 3, source: require('./images/story3.jpg'), name: 'Mateus' },
  { id: 4, source: require('./images/story4.jpg'), name: 'Brenda' },
  { id: 5, source: require('./images/story5.jpg'), name: 'Maria Clara' },
  { id: 6, source: require('./images/story6.jpg'), name: 'Yuni' },
  { id: 7, source: require('./images/story7.jpg'), name: 'Julia' },
];

const feed = [
  { id: 1, source: require('./images/feed1.jpg'), profile: require('./images/story6.jpg'), name: 'Yuni', phrase: 'Apenas vivendo a vida!' },
  { id: 2, source: require('./images/feed2.jpg'), profile: require('./images/story2.jpg'), name: 'Carol', phrase: 'Um dia ensolarado!' },
  { id: 3, source: require('./images/feed3.jpg'), profile: require('./images/story3.jpg'), name: 'Mateus', phrase: 'Melhor dia de todos!' },
  { id: 4, source: require('./images/feed4.jpg'), profile: require('./images/story4.jpg'), name: 'Brenda', phrase: 'Aventuras ao ar livre!' },
];

const likes = [
  { id: 1, profile: require('./images/story2.jpg'), name: 'Carol' },
  { id: 2, profile: require('./images/story5.jpg'), name: 'Maria Clara' },
  { id: 3, profile: require('./images/story7.jpg'), name: 'Julia' },
  { id: 5, profile: require('./images/story3.jpg'), name: 'Mateus' },
  { id: 6, profile: require('./images/story6.jpg'), name: 'Yuni' },
];

const Detalhes = () => {
  const navigation = useNavigation();

  const renderStory = ({ item }) => (
    <TouchableOpacity style={styles.story}>
      <Image source={item.source} style={styles.storyImage} />
      <Text style={styles.storyName}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <View style={[styles.mainContainer, { marginTop: 50 }]}>
      <ScrollView style={styles.container}>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => navigation.navigate('Instagram')}>
            <Image source={require('./images/fonte.png')} style={styles.headerImage} />
          </TouchableOpacity>
          <View style={styles.headerIcons}>
            <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
            <Ionicons name="chatbubble-ellipses-outline" size={24} color="black" style={styles.icon} />
          </View>
        </View>
        <FlatList
          horizontal
          data={stories}
          renderItem={renderStory}
          keyExtractor={(item) => item.id.toString()}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.storiesContainer}
        />
       
        <View style={styles.feedContainer}>
          {feed.map((item, index) => (
            <View key={item.id} style={styles.feedItem}>
              <View style={styles.feedHeader}>
                <Image source={item.profile} style={styles.feedProfileImage} />
                <Text style={styles.feedProfileName}>{item.name}</Text>
              </View>
              <Image source={item.source} style={styles.feedImage} />
              <View style={styles.feedActions}>
                <View style={styles.leftIcons}>
                  <Ionicons name="heart-outline" size={24} color="black" style={styles.icon} />
                  <Ionicons name="chatbubble-outline" size={24} color="black" style={styles.icon} />
                  <Ionicons name="paper-plane-outline" size={24} color="black" style={styles.icon} />
                </View>
                <Ionicons name="bookmark-outline" size={24} color="black" style={styles.icon} />
              </View>
              <View style={styles.feedFollowInfo}>
                <View style={styles.followedByContainer}>
                  <Image source={likes[index % likes.length].profile} style={styles.feedFollowImage} />
                  <Text style={styles.followedByName}>Curtido por </Text>
                  <Text style={styles.boldText}>{likes[index % likes.length].name}</Text>
                  <Text style={styles.followedByName}> e outras </Text>
                  <Text style={styles.boldText}>{Math.floor(Math.random() * 1000)}</Text>
                  <Text style={styles.followedByName}> pessoas</Text>
                </View>
              </View>
              <View style={styles.feedComment}>
                <Text style={styles.feedCommentText}>
                  <Text style={styles.boldText}>{item.name}</Text> {item.phrase}
                </Text>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <Ionicons name="home-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="search-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="add-circle-outline" size={24} color="black" style={styles.icon} />
        <Ionicons name="videocam-outline" size={24} color="black" style={styles.icon} />
        <Image source={require('./images/story1.jpg')} style={styles.footerProfileImage} />
      </View>
    </View>
  );
};

export default Detalhes;
