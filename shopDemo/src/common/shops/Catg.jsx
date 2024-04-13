import React from "react"
import { useState } from "react"
import axios from "axios"
import { Menu } from 'antd';


const Catg = ({ setState,setRes}) => {
  
  function getItem(label, key, icon, children, type) {
    return {
      key,
      icon,
      children,
      label,
      type,
    };
  }
  const items = [
    
    getItem('apple', '1', null , [
      getItem(<div onClick={()=>{
        axios({
          method:'get',
          url:'/search'+"/Screen"
          }).then(res => {
          setRes(res.data)
          setState(1)
          console.log(res)
          })
      }}>Screen</div>),
      getItem(<div onClick={()=>{
        axios({
          method:'get',
          url:'/search'+"/Battery"
          }).then(res => {
          setRes(res.data)
          setState(1)
          console.log(res)
          })
      }}>Battery</div>),
      getItem(<div onClick={()=>{
        axios({
          method:'get',
          url:'/search'+"/charging port"
          }).then(res => {
          setRes(res.data)
          setState(1)
          console.log(res)
          })
      }}>charging port</div>),
      getItem(<div onClick={()=>{
        axios({
          method:'get',
          url:'/search'+"/back cover"
          }).then(res => {
          setRes(res.data)
          setState(1)
          console.log(res)
          })
      }}>back cover</div>)
    ]
  ),
  getItem('samsung', '2',null, [
    getItem(<div onClick={()=>{
      axios({
        method:'get',
        url:'/search'+"/Screen"
        }).then(res => {
        setRes(res.data)
        setState(1)
        console.log(res)
        })
    }}>Screen</div>),
    getItem(<div onClick={()=>{
      axios({
        method:'get',
        url:'/search'+"/Battery"
        }).then(res => {
        setRes(res.data)
        setState(1)
        console.log(res)
        })
    }}>Battery</div>),
    getItem(<div onClick={()=>{
      axios({
        method:'get',
        url:'/search'+"/charging port"
        }).then(res => {
        setRes(res.data)
        setState(1)
        console.log(res)
        })
    }}>charging port</div>),
    getItem(<div onClick={()=>{
      axios({
        method:'get',
        url:'/search'+"/back cover"
        }).then(res => {
        setRes(res.data)
        setState(1)
        console.log(res)
        })
    }}>back cover</div>)
  ]
),
getItem('oppo', '3', null , [
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Screen"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Screen</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Battery"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Battery</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/charging port"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>charging port</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/back cover"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>back cover</div>)
]
),
getItem('vivo', '4', null , [
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Screen"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Screen</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Battery"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Battery</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/charging port"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>charging port</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/back cover"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>back cover</div>)
]
),
getItem('redmi', '5', null , [
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Screen"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Screen</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Battery"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Battery</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/charging port"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>charging port</div>),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/back cover"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>back cover</div>)
]
),
getItem('sony', '6', null , [
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Screen"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Screen</div>, '6-1'),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/Battery"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>Battery</div>, '6-2'),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/charging port"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>charging port</div>, '6-3'),
  getItem(<div onClick={()=>{
    axios({
      method:'get',
      url:'/search'+"/back cover"
      }).then(res => {
      setRes(res.data)
      setState(1)
      console.log(res)
      })
  }}>back cover</div>, '6-4')
]
),
  getItem(<div onClick={()=>{
    setState(0)
  }}>all product</div>,'7'
  
),
  
  ];
  const getLevelKeys = (items1) => {
    const key = {};
    const func = (items2, level = 1) => {
      items2.forEach((item) => {
        if (item.key) {
          key[item.key] = level;
        }
        if (item.children) {
          return func(item.children, level + 1);
        }
      });
    };
    func(items1);
    return key;
  };
  const levelKeys = getLevelKeys(items);
  const [stateOpenKeys, setStateOpenKeys] = useState(['1']);
  const onOpenChange = (openKeys) => {
    const currentOpenKey = openKeys.find((key) => stateOpenKeys.indexOf(key) === -1);
    // open
    if (currentOpenKey !== undefined) {
      const repeatIndex = openKeys
        .filter((key) => key !== currentOpenKey)
        .findIndex((key) => levelKeys[key] === levelKeys[currentOpenKey]);
      setStateOpenKeys(
        openKeys
          // remove repeat key
          .filter((_, index) => index !== repeatIndex)
          // remove current level all child
          .filter((key) => levelKeys[key] <= levelKeys[currentOpenKey]),
      );
    } else {
      // close
      setStateOpenKeys(openKeys);
    }
  };
  return (
    <>
      <div className='category'>
        <div className='chead d_flex'>
          <h1 >Brands </h1>
        </div>
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          openKeys={stateOpenKeys}
          onOpenChange={onOpenChange}
          style={{
          width: 256,
          }}
          items={items}
        />

        
        
        
      </div>
    </>
  )
}

export default Catg
