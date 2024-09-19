import React from 'react';
import './Card.css';
import UrgentIcon from '../assets/SVG - Urgent Priority colour.svg';
import Cancelled from '../assets/Cancelled.svg';
import HighIcon from '../assets/Img - High Priority.svg';
import MediumIcon from '../assets/Img - Medium Priority.svg';
import LowIcon from '../assets/Img - Low Priority.svg';
import NoPriorityIcon from '../assets/No-priority.svg';
import TodoIcon from '../assets/To-do.svg';
import InProgressIcon from '../assets/in-progress.svg';
import DoneIcon from '../assets/Done.svg';
import BacklogIcon from '../assets/Backlog.svg';

const Card = ({ ticket }) => {
  const getPriorityIcon = () => {
    if (ticket.priority === 4) {
      return <img src={UrgentIcon} alt="Urgent Priority" />;
    } 
    else if (ticket.priority === 3) {
      return <img src={HighIcon} alt="High Priority" />;
    }
     else if (ticket.priority === 2) {
      return <img src={MediumIcon} alt="Medium Priority" />;
    } 
    else if (ticket.priority === 1) {
      return <img src={LowIcon} alt="Low Priority" />;
    } 
    else if (ticket.priority === 0) {
      return <img src={Cancelled} alt="Cancelled" />;
    } 
    else {
      return <img src={NoPriorityIcon} alt="No Priority" />;
    }
  };


  const getStatusIcon = () => {
    if (ticket.status === 'Todo') {
      return <img src={TodoIcon} alt="To Do" />;
    } 
    else if (ticket.status === 'In Progress') {
      return <img src={InProgressIcon} alt="In Progress" />;
    } 
    else if (ticket.status === 'Done') {
      return <img src={DoneIcon} alt="Done" />;
    } 
    else if (ticket.status === 'Backlog') {
      return <img src={BacklogIcon} alt="Backlog" />;
    } 
    else {
      return <img src={Cancelled} alt="Cancelled" />;
    }
  };
  

  return (
    <div className="ticket-card">
      <p className='ids'>{ticket.id}</p>
      <div className="ticket-header">
        <div className="status-icon">{getStatusIcon()}</div>
        <h3>{ticket.title}</h3>
      </div>
      <div className="ticket-body">
      <p className="ticket-tags">
        <span className="ellipsis">!</span>
        {ticket.tag.join(', ')}
      </p>
    </div>
      <div className="ticket-footer">
        <div className="priority-icon">{getPriorityIcon()}</div>
      </div>
    </div>
  );
};

export default Card;
