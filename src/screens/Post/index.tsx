import { useState, useRef } from 'react';
import { View, Text, ScrollView, useWindowDimensions } from 'react-native'
import { Progressbar } from '../../components/Progressbar'
import { styles } from './styles'


type ScrollProps = {
    layoutMeasurement: {
        height:number
    };
    contentOffset:{
        y:number
    };
    contentSize:{
        height:number
    }
}

export function Post() {
    const [percentage, setPercentage] = useState(0);

    const scrollRef = useRef<ScrollView>(null)

    const dimensions = useWindowDimensions();

    function scrollPercentage({contentSize,contentOffset,layoutMeasurement}:ScrollProps){
        const visibleContent = ((dimensions.height / contentSize.height) * 100);

        
        const value = ((layoutMeasurement.height + contentOffset.y) / contentSize.height) * 100;
        setPercentage(value < visibleContent+1 ? 0 : value)
    }

    function handleScrollMoveTop(){
        scrollRef.current?.scrollTo({
            x:0,
            y:0,
            animated: true
        })
    }

  return (
    <View style={styles.container}>
        <ScrollView
            ref={scrollRef}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.content}
            onScroll={(event)=>scrollPercentage(event.nativeEvent)}
        >

            <Text style={styles.title}>
                Lorem ipsum
            </Text>
            <View>
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
    </Text>
    
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Est eligendi pariatur vero tempora at ipsam, nam dolorum. Numquam cum at quod veritatis, assumenda omnis itaque aperiam. Natus, cum? Tempore, vitae.
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore ipsa sunt itaque velit illo fugit dolores cumque? Error rerum voluptates perferendis illo, odit molestiae distinctio architecto asperiores. Tempora, distinctio.
    </Text>
    
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
    </Text>
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
    </Text>
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore ipsa sunt itaque velit illo fugit dolores cumque? Error rerum voluptates perferendis illo, odit molestiae distinctio architecto asperiores. Tempora, distinctio.
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore ipsa sunt itaque velit illo fugit dolores cumque? Error rerum voluptates perferendis illo, odit molestiae distinctio architecto asperiores. Tempora, distinctio.        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore ipsa sunt itaque velit illo fugit dolores cumque? Error rerum voluptates perferendis illo, odit molestiae distinctio architecto asperiores. Tempora, distinctio.        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, inventore ipsa sunt itaque velit illo fugit dolores cumque? Error rerum voluptates perferendis illo, odit molestiae distinctio architecto asperiores. Tempora, distinctio.
        `
    </Text>
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
    </Text>
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
    </Text>
    <Text style={styles.text}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cum, aut nostrum accusantium explicabo ullam veniam doloribus fugiat, repellat nobis quae laboriosam consectetur aliquid voluptas dolorum vero cupiditate eligendi at. Sint?
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, harum ad quae unde ea consectetur, aliquam maxime laudantium tempora quidem, libero numquam quo sunt autem facere fugiat perferendis praesentium cumque?
    </Text>
            </View>
    </ScrollView>
    <Progressbar value={percentage} onMoveTop={handleScrollMoveTop}/>
    </View>
  )
}