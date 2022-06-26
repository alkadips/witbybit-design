import React from 'react';
import './WitByBit.css';
function WitByBit({ userdata }) {
    return (
        <>
            <div className='row mt-5'>
                <div className='col-md-2 left-wrapper'>
                    <div className='d-flex logo-wrapper'>
                   <div className='logo'></div>
                   <div className='school-space'>School Space</div>
                   </div>
                   <ul className='ul-wrapper'>
                    <li className='li-list d-flex'><span className="glyphicon glyphicon-pencil pencil-list"></span> <div style={{marginLeft:"20px"}}>Dashboard</div></li>
                    <li className='li-list d-flex'><span className="glyphicon glyphicon-pencil pencil-list"></span> <div style={{marginLeft:"20px"}}>Courses</div></li>
                    <li className='li-list-student d-flex'><div className="glyphicon glyphicon-pencil pencil-list-student"></div> <div style={{marginLeft:"25px",marginTop:"6px"}}>Students</div></li>
                    <li className='li-list d-flex'><span className="glyphicon glyphicon-pencil pencil-list"></span> <div style={{marginLeft:"20px"}}>Exams</div></li>
                    <li className='li-list d-flex'><span className="glyphicon glyphicon-pencil pencil-list"></span> <div style={{marginLeft:"20px"}}>Results</div></li>
                    <li className='li-list d-flex'><span className="glyphicon glyphicon-pencil pencil-list"></span> <div style={{marginLeft:"20px"}}>Notice Board</div></li>
                    <li className='li-list d-flex'><span className="glyphicon glyphicon-pencil pencil-list"></span> <div style={{marginLeft:"20px"}}>Live Classes</div></li>
                    <li className='li-list d-flex'><span className="glyphicon glyphicon-pencil pencil-list"></span> <div style={{marginLeft:"20px"}}>Notifications</div></li>



                </ul>
                <div className='profile-wrapper'>
                <div>
                    <img src="./profile.jpg" className='profile-img-css'>

                    </img>
                </div>
                <div style={{fontSize:"14px",color: "#242424"}}>Andy Samberg</div>
                <div className='gmail'>andy.samberg@gmail.com</div>
                <div><input className='input-text' placeholder='VIEW PROFILE' type="text"/></div>
                </div>
                </div>
              
                <div className='col-md-10'>


                    <div className='d-flex header-wrapper'>
                        <div className='student'>Students</div>
                        <div><button className='add-button'>+ ADD
                        </button></div>
                    </div>


                    <div>
                        <table style={{width:"100%"}}>
                            <tr className='table-header-main'>
                                <th>No.</th>
                                <th>Student Name</th> 
                                <th>Class</th>
                                 <th>Result</th>
                                 <th>Score</th>
                                 <th>Grade</th>
                            </tr>
                            <tr style={{borderBottom:"1px solid #E5E5E5"}}>
                                <td>1</td>
                                <td>Robert Fox</td>
                                <td>8th</td>
                                <td className='passed'>Passed</td>
                                <td>78/ 100</td>
                                <td className='excellent'>Excellent</td>
                            </tr>
                            <tr style={{borderBottom:"1px solid #E5E5E5"}}>
                                <td>2</td>
                                <td>Ralph Edwards</td>
                                <td>7th</td>
                                <td className='failed'>Failed</td>
                                <td>20/ 100</td>
                                <td className='poor'>Poor</td>
                            </tr> <tr style={{borderBottom:"1px solid #E5E5E5"}}>
                                <td>3</td>
                                <td>Esther Howard</td>
                                <td>9th</td>
                                <td className='passed'>Passed</td>
                                <td>60/ 100</td>
                                <td className='average'>Average</td>
                            </tr> <tr style={{borderBottom:"1px solid #E5E5E5"}}>
                                <td>4</td>
                                <td>Eleanor Pena</td>
                                <td>8th</td>
                                <td className='passed'>Passed</td>
                                <td>60/ 100</td>
                                <td className='average'>Average</td>
                            </tr> <tr style={{borderBottom:"1px solid #E5E5E5"}}>
                                <td>5</td>
                                <td>Arlene McCoy</td>
                                <td>7th</td>
                                <td className='passed'>Passed</td>
                                <td>85/ 100</td>
                                <td>
                                    <div className='d-flex'>
                                        <div className='excellent'>Excellent</div>
                                        <div>
                                        <span className="glyphicon glyphicon-pencil pencil"></span>
                                        </div>
                                        <div><span className="glyphicon glyphicon-trash pencil"></span></div>
                                    </div>
                                </td>

                            </tr> <tr style={{borderBottom:"1px solid #E5E5E5"}}>
                                <td>6</td>
                                <td>Marvin McKinney</td>
                                <td>9th</td>
                                <td className='failed'>Failed</td>
                                <td>25/ 100</td>
                                <td className='poor'>Poor</td>
                            </tr> 
                            <tr style={{borderBottom:"1px solid #E5E5E5"}}>
                                <td>7</td>
                                <td>Wade Warren</td>
                                <td>7th</td>
                                <td className='passed'>Passed</td>
                                <td>90/ 100</td>
                                <td className='excellent'>Excellent</td>
                            </tr>
                            <tr className='bottom-row' style={{borderBottom:"1px solid #E5E5E5",height:"400px"}}>
                                <td></td>
                                <td></td>
                                <td></td>
                                <td className=''></td>
                                <td></td>
                                <td className=''></td>
                            </tr>
                        </table>
                        <div className='showing7'>Showing 7 of 7 entries</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default WitByBit;