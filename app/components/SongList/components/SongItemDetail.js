import React, { memo } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import * as StyleConstants from 'Gruvee/config/styles'

const defaultAlbumArtworkAsset = require('Gruvee/assets/defaults/album_artwork/default_album_cover_bg_image.png')

const SongItemDetail = ({ songData }) => {
    // First image is always the widest
    const albumArtwork =
        songData.images && songData.images.length ? { uri: songData.images[0].url } : null
    return (
        <View style={styles.Container}>
            <Image
                style={styles.Image}
                source={albumArtwork}
                // Anroid debug builds ignore default source cuz why not?
                defaultSource={defaultAlbumArtworkAsset}
                resizeMode="cover"
            />
            <View style={styles.DetailContainer}>
                {/* TODO: Implement some sort of scroll for long Text */}
                <Text numberOfLines={1} style={styles.SongTitleText}>
                    {songData.name}
                </Text>
                <Text numberOfLines={1} style={styles.SongDetailText}>
                    {songData.creator}
                </Text>
                <Text numberOfLines={1} style={styles.SongDetailText}>
                    {songData.album}
                </Text>
            </View>
        </View>
    )
}

// Styles
const styles = StyleSheet.create({
    Container: {
        flexDirection: 'row',
        backgroundColor: StyleConstants.SONG_LIST_ITEM_BACKGROUND_COLOR,
        height: StyleConstants.SONG_LIST_ITEM_DETAIL_HEIGHT,
        borderTopLeftRadius: StyleConstants.LIST_ITEM_BORDER_RADIUS,
        borderTopRightRadius: StyleConstants.LIST_ITEM_BORDER_RADIUS,
    },
    Image: {
        width: StyleConstants.SONG_LIST_ITEM_ALBUM_ARTWORK_SIZE,
        height: StyleConstants.SONG_LIST_ITEM_ALBUM_ARTWORK_SIZE,
        borderTopLeftRadius: StyleConstants.LIST_ITEM_BORDER_RADIUS,
    },
    DetailContainer: {
        flexShrink: 1,
        paddingVertical: 8,
        paddingHorizontal: 10,
        justifyContent: 'center',
    },
    SongTitleText: {
        fontSize: StyleConstants.SONG_LIST_ITEM_TITLE_SIZE_iOS,
        fontWeight: StyleConstants.SEMIBOLD_WEIGHT,
        color: StyleConstants.BASE_FONT_COLOR,
        paddingBottom: 5,
    },
    SongDetailText: {
        fontSize: StyleConstants.SONG_LIST_ITEM_DETAIL_SIZE_iOS,
        color: StyleConstants.SONG_LIST_ITEM_DETAIL_COLOR,
    },
})

export default memo(SongItemDetail)
