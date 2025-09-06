import { useGSAP } from '@gsap/react'
import ProjectCard from '../components/projects/ProjectCard'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Agence from './Agence'
import { Link } from 'react-router-dom'


const Projects = () => {

  const projects = [{
    image1: 'https://k72.ca/uploads/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/WIDESCAPE/WS---K72.ca---Thumbnail-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/OKA/OKA_thumbnail-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/Opto/thumbnailimage_opto-1280x960.jpg'
  }, {
    image1: 'https://k72.ca/uploads/caseStudies/LAMAJEURE_-_Son_sur_mesure/chalaxeur-thumbnail_img-1280x960.jpg',
    image2: 'https://k72.ca/uploads/caseStudies/SHELTON/thumbnailimage_shelton-1280x960.jpg'
  }]

  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {
    gsap.from('.hero', {
      height: '100px',
      stagger: {
        amount: 1
      },
      scrollTrigger: {
        trigger: '.lol',
        start: 'top 70%',
        end: 'top -130%',
        scrub: true,
      }
    })
  })

  return (
    <>
      <div id='parent'>
        <div className='page1 p-3 mb-[10vw]'>
          <div className=' pt-[40vh]'>
            <h2 className='font-[font2] text-[12vw] uppercase'>Projets</h2>
          </div>
          <div className='-mt-13 lol'>
            {projects.map(function (elem, idx) {
              return <div key={idx} className='hero w-full h-[400px] object-cover  mb-4 flex flex-row gap-3'>
                <ProjectCard image1={elem.image1} image2={elem.image2} />
              </div>
            })}
          </div>
        </div>
      </div>
      {/* Page2 section below all images. Under Construction 
      <div className="w-full bg-black text-white py-20 flex justify-center items-center">
        <h2 className="text-4xl font-[font2]"><div><Link to="/agence">Agence</Link></div></h2>
      </div>
      */}
    </>
  )
}

export default Projects