import React, {useState,useEffect} from 'react'
import Header from "../components/Header";
import Footer from "../components/Footer";
import NurseCard from "../components/NurseCard";

const AllNurses = () => {

    const[userId,setUserId]=useState(0);

    const getUserDetail=()=>{
        const id=localStorage.getItem('UserId');
        setUserId(id);
    }

    const [myNurse, setMyNurse] = useState([]);
    const [isMyNurseVisible, setMyNurseVisible] = useState(true);
    const [countOfMyNurse, setcountOfMyNurse] = useState(0);

    const [onlineNurses, setOnlineNurses] = useState([]);
    const [countOfOnlineNurse, setcountOfOnlineNurse] = useState(0);
    const [isOnlineNurseVisible, setIsOnlineNurseVisible] = useState(true);
    const [offlineNurses, setOfflineNurses] = useState([]);
    const [countOfOfflineNurse, setcountOfOfflineNurse] = useState(0);
    const [isOfflineNurseVisible, setIsOfflineNurseVisible] = useState(true);
    const loadMoreMyNurse = () => {
        setcountOfMyNurse(countOfMyNurse + 1);
    };

    const loadMoreOnlineNurse = () => {
        setcountOfOnlineNurse(countOfOnlineNurse + 1);
    };

    const loadMoreOfflineNurse = () => {
        setcountOfOfflineNurse(countOfOfflineNurse + 1);
        alert(countOfOfflineNurse);
    };
    const setNurseData = async (url, bodyData, forNurse) => {
        try {
            const data = await fetch(url, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(bodyData),
            });
            const response = await data.json();
              // console.log(`${url}`+JSON.stringify(response));
            switch (forNurse) {
                case 1:
                    setMyNurse(response);
                    setMyNurseVisible(false);
                    setcountOfMyNurse(2);

                    break;
                case 2:
                    setOfflineNurses(response);
                    setcountOfOfflineNurse(2);
                    setIsOfflineNurseVisible(false);
                    break;
                case 3:
                    setOnlineNurses(response);
                    setcountOfOnlineNurse(2);
                    setIsOnlineNurseVisible(false);
                    break;
            }
        } catch (error) {}
    };

    useEffect(() => {
        let isMounted=true;
        if(isMounted) {
            if (userId !== 0) {
                setNurseData(
                    'http://3.97.166.213:81/myNurses',
                    {_user_id: `${userId}`},
                    1,
                );
                setNurseData(
                    'http://3.97.166.213:81/nurses/status_online',
                    {_status_online: 0},
                    2,
                );
                setNurseData(
                    'http://3.97.166.213:81/nurses/status_online',
                    {_status_online: 1},
                    3,
                );
            }
        }
        return()=>{
            isMounted=false;
        }
    }, [userId]);

    useEffect(() => {
        let isMounted=true;
        if(isMounted) {
            getUserDetail();
        }
        return()=>{
            isMounted=false;
        }
    }, []);

    return(<div  style={{backgroundColor:'white'}}>
    <Header/>
      <div>
          <p style={{fontFamily:'Roboto', textTransform:'Uppercase',textAlign:'center',fontSize:'20px', marginTop:'10px'}}>MY NURSES</p>
          {
              myNurse.length==0?(<p>You don't have Nurses</p>):(  <div>

                  <NurseCard item={myNurse} key="MYNURSE"/>
              </div>)
          }

      </div>
            <div>
                <p style={{fontFamily:'Roboto', textTransform:'Uppercase',textAlign:'center',fontSize:'20px', marginTop:'10px'}}>Online Now</p>
                {
                    onlineNurses.length==0?<p>No online Nurses</p>:(
                        <div>

                            <NurseCard item={onlineNurses} key="ONLINE"/>
                        </div>
                    )
                }

            </div>
            <div>
                <p style={{fontFamily:'Roboto', textTransform:'Uppercase',textAlign:'center',fontSize:'20px', marginTop:'10px'}}>offline Now</p>
                {
                    offlineNurses.length==0?<p>No online Nurses</p>:(
                        <div>

                            <NurseCard item={offlineNurses} key="offline"/>
                        </div>
                    )
                }
            </div>

    <Footer/>
        </div>
    )
}

export  default  AllNurses;