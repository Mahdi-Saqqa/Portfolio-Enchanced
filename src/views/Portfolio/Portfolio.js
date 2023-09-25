import React from 'react'
import MainPost from '../../components/Post/MainPost'
import FeaturedPost from '../../components/Post/FeaturedPost';

const Portfolio = (props) => {
    const {mood ,dark}= props;
    const post = {
        title: 'Projects',
        description:
            "This is a collection of my work. I have a passion for creating and I'm always looking for new projects to work on. If you have any questions or would like to work with me, please feel free to contact me.",
        image: 'https://www.ishir.com/wp-content/uploads/2021/06/Custom-dimensions-670x450-px-Custom-dimensions.jpeg',
        imageText: 'main image description',
        linkText: 'Continue reading…',
    };
    const Cinphilia = {
        title: 'Cinephilia',
        date: 'may 22',
        description:
            'Cinephilia is a movie review app that allows users to search for movies and leave reviews. It also allows users to create a watchlist of movies they want to see.',
        image: './cinephilia.png',
        imageLabel: 'Image Text',
        linkText: 'Continue reading…',
        url:'https://github.com/Mahdi-Saqqa/CinePhilia',
    };
    const PodCasti = {
        title: 'PodCasti',
        date: 'Apr 5',
        description:
            'PodCasti is a podcast app that allows users to search for podcasts and listen to them. It also allows users to create a playlist of podcasts they want to listen to.',
        image: './podcasti.png',
        imageLabel: 'Image Text',
        linkText: 'Continue reading…',
        url:'https://github.com/Mahdi-Saqqa/podcasti-python-project',
    };
    const CareerHive = {
        title: 'Career Hive',
        date: 'Jul 5',
        description:
            'Career Hive is a job search app that allows users to search for jobs and apply to them. It also allows users to create a profile and upload their resume.',
        image: './careerhive.png',
        imageLabel: 'Image Text',
        linkText: 'Continue reading…',
        url:'https://github.com/TaleenMusa/CareerHive',
    };
    const Gramiphy = {
        title: 'Gramiphy',
        date: 'In Progress',
        description:
            'Gramiphy is a social media app that allows users to post pictures and videos. It also allows users to follow other users and like their posts.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text',
        linkText: 'Continue reading…',
        url:'https://github.com/Mahdi-Saqqa/gramiphy',

    }
    
  return (
    <div className='Portfolio col-10 mx-auto'>
                <MainPost post={post} mood={mood} />
                <div className="row justify-content-lg-between">
                <div className=" mb-5  col-lg-6 col-md-12 col-sm-12">
                    <FeaturedPost dark={dark}  mood={mood}  post={PodCasti} />
                    </div>
                    <div className=" mb-5 col-lg-6 col-md-12 col-sm-12">
                    <FeaturedPost dark={dark} mood={mood}  post={Cinphilia} />
                    </div>
                    <div className=" mb-5  col-lg-6 col-md-12 col-sm-12">
                    <FeaturedPost dark={dark}  mood={mood}  post={CareerHive} />
                    </div>
                    <div className=" mb-5  col-lg-6 col-md-12 col-sm-12">
                    <FeaturedPost  dark={dark} mood={mood}  post={Gramiphy} />
                    </div>
                </div>  
    </div>
  )
}

export default Portfolio