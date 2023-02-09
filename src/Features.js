import React, {useState} from 'react'
import './Features.css'
// import Fpng1 from './https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'
import Fpng2 from './feature-2.png'
import Fpng3 from './feature-3.png'
import Fpng4 from './feature-4.png'
import { Link } from 'react-router-dom'
import { Accordion, Typography, AccordionSummary, AccordionDetails,Stack } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { Gif } from '@mui/icons-material'

function Features() {
    const[expanded, setExpanded] = useState(false)

    const handleChange = (isExpanded, panel)=>{
        setExpanded(isExpanded ? panel : false)
    }
  return (
    <div className='feature'>
        <div className='row'>
            <div className='text__col'>
            <h2>Enjoy on your TV.</h2>
            <p>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray Players and more.</p>
            </div>
            <div  className='img__col'>
                <video autoPlay playsInline muted loop src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'> </video>
            </div>
        </div>

        <div className='row'>
            <div className='text__col'>
            <h2>Download your shows to watch offline.</h2>
            <p>Save your favourites easily and always have something to watch.</p>
            </div>
            <div className='img__col'>
                <img autoPlay playsInline muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg"></img>
            </div>
        </div>

        <div className='row'>
            <div className='text__col'>
            <h2>Watch everywhere.</h2>
            <p>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
            </div>
            <div className='img__col'>
                <img className='desktop'  autoPlay playsInline muted loop src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/device-pile-in.png" data-uia="our-story-card-img"/>
                <video className='video' autoPlay playsInline muted loop src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v'> </video>
            </div>
        </div>

        <div className='row'>
            <div className='text__col'>
            <h2>Create profiles for children.</h2>
            <p>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</p>
            </div>
            <div className='img__col'>
                <img src={Fpng4}></img>
            </div>
        </div>

        <div className='faq'>
            <h2>Frequently Asked Questions</h2>
            <ul className='accordion'>
          
        <Stack spacing={1}>    
        <Accordion
             expanded = {expanded === "panel1"}
             onChange = {(event,isExpanded) => handleChange(isExpanded, "panel1")}
        >
            <AccordionSummary
            expandIcon={<AddIcon/>}
            >
                <Typography  expandIcon={<AddIcon/>}>What is Netflix</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Netflix is a streaming service that offers a wide variety of award-winning TV shows, movies, anime, documentaries and more – on thousands of internet-connected devices.

                You can watch as much as you want, whenever you want, without a single ad – all for one low monthly price. There's always something new to discover, and new TV shows and movies are added every week!</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion
         expanded = {expanded === "panel2"}
         onChange = {(event,isExpanded) => handleChange(isExpanded, "panel2")}
        >
            <AccordionSummary
            expandIcon={<AddIcon/>}
            >
                <Typography>How much does Netflix cost?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Watch Netflix on your smartphone, tablet, Smart TV, laptop, or streaming device, all for one fixed monthly fee. Plans range from ₹ 149 to ₹ 649 a month. No extra costs, no contracts.</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion
         expanded = {expanded === "panel3"}
         onChange = {(event,isExpanded) => handleChange(isExpanded, "panel3")}
        >
            <AccordionSummary
            expandIcon={<AddIcon/>}
            >
                <Typography>Where can I watch?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Watch anywhere, anytime. Sign in with your Netflix account to watch instantly on the web at netflix.com from your personal computer or on any internet-connected device that offers the Netflix app, including smart TVs, smartphones, tablets, streaming media players and game consoles.

                You can also download your favourite shows with the iOS, Android, or Windows 10 app. Use downloads to watch while you're on the go and without an internet connection. Take Netflix with you anywhere.</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion
        expanded = {expanded === "panel4"}
        onChange = {(event,isExpanded) => handleChange(isExpanded, "panel4")}
        >
            <AccordionSummary expandIcon={<AddIcon/>}>
                <Typography>How do I cancel?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Netflix is flexible. There are no annoying contracts and no commitments. You can easily cancel your account online in two clicks. There are no cancellation fees – start or stop your account anytime.</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion
         expanded = {expanded === "panel5"}
         onChange = {(event,isExpanded) => handleChange(isExpanded, "panel5")}
        >
            <AccordionSummary expandIcon={<AddIcon/>}>
                <Typography>What can I watch on Netflix?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>Netflix has an extensive library of feature films, documentaries, TV shows, anime, award-winning Netflix originals, and more. Watch as much as you want, anytime you want.</Typography>
            </AccordionDetails>
        </Accordion>

        <Accordion
         expanded = {expanded === "panel6"}
         onChange = {(event,isExpanded) => handleChange(isExpanded, "panel6")}
        >
            <AccordionSummary expandIcon={<AddIcon/>}>
                <Typography>Is Netflix good for kids?</Typography>
            </AccordionSummary>
            <AccordionDetails>
                <Typography>The Netflix Kids experience is included in your membership to give parents control while kids enjoy family-friendly TV shows and films in their own space.

                Kids profiles come with PIN-protected parental controls that let you restrict the maturity rating of content kids can watch and block specific titles you don’t want kids to see.</Typography>
            </AccordionDetails>
        </Accordion>
        </Stack>
                    
                
            </ul>
            <Link to="/Second" className="button">Restart your membership </Link>
           
        </div>
    </div>
  )
}

export default Features