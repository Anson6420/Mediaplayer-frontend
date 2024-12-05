import { faCloudArrowUp } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { addVideoApi } from '../services/allApi';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Add({setAddStatus}) {
  const [show, setShow] = useState(false);
  const [videoDetails,setvideoDetails]=useState({
    caption:"",
    Imgurl:"",
    emdedLink:""
  })
  console.log(videoDetails);
  const handleClose = () => {setShow(false);
    handleCancel()
  }

  const handleShow = () => setShow(true);

  const handleCancel =()=>{
   setvideoDetails({
    caption:"",
    Imgurl:"",
    emdedLink:""
   })
  }

  const handleAdd = async () => {
    const { caption, Imgurl, emdedLink } = videoDetails;
  
    if (!caption || !Imgurl || !emdedLink) {
      toast.info('please fill the form completely');
    } 
    else {
      if (emdedLink.startsWith('https://youtu.be/')) {
        // https://youtu.be/IOM-wNpCR4U?feature=shared
        let link = `https://www.youtube.com/embed/${emdedLink.slice(17, 28)}`;
        console.log(link);
        const result = await addVideoApi({ caption, Imgurl, emdedLink: link });
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('video added sucessfully')
          handleClose()
          setAddStatus(result)
        }
        else{
          toast.danger('something went wrong')
        handleCancel()
        }
      } 
      else {
        // https://www.youtube.com/watch?v=IOM-wNpCR4U
        let link = `https://www.youtube.com/embed/${emdedLink.slice(-11)}`;
        console.log(link);
        const result = await addVideoApi({ caption, Imgurl, emdedLink: link });
        console.log(result);
        if(result.status>=200 && result.status<300){
          toast.success('video added sucessfully')
          handleClose()
          setAddStatus(result)
        }
        else{
          toast.danger('something went wrong')
        handleCancel()
        }
      }
    }
  };
  
  return (
    <>
      <h5>Upload New Video <FontAwesomeIcon onClick={handleShow} icon={faCloudArrowUp} className='ms-3' /></h5>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className='text-warning'><FontAwesomeIcon icon={faFilm} />Upload Videos</Modal.Title>
        </Modal.Header>

        <Modal.Body>
        <p className='text-light'>Please fill the following details</p>
<form className='border border-secondary p-3 rounded'>
    <div className='mb-3'>
        <input type='text' placeholder='Video Caption' value={videoDetails.caption} className='form-control' onChange={(e)=>setvideoDetails({...videoDetails,caption:e.target.value})} />
    </div>
    <div className='mb-3'>
        <input type='text' placeholder='Video Image' className='form-control' value={videoDetails.Imgurl} onChange={(e)=>setvideoDetails({...videoDetails,Imgurl:e.target.value})} />
    </div>
    <div className='mb-3'>
        <input type='text' placeholder='Video Url' className='form-control' value={videoDetails.emdedLink} onChange={(e)=>setvideoDetails({...videoDetails,emdedLink:e.target.value})}/>
    </div>
</form>
          </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleCancel}>
            Close
          </Button>
          <Button variant="primary" onClick={handleAdd}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
      <ToastContainer position='top-center' theme="colored" autoClose={2000} />
    </>
  )
}

export default Add