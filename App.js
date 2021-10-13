import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  FlatList,
} from 'react-native';
import Task from './Components/Tasks';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState('');
  const [jobs, setjobs] = useState([]);
  const [focused, setFocused] = useState(true);

  //this method for adding new job to do
  const pushJob = () => {
    if (text.trim().length == 0) {
      alert('lütfen yapılacak işinizi girinizz');
    } else {
      const newTodo = {
        id: Math.random(),
        jobName: text,
        isComplated: false,
      };
      setjobs([...jobs, newTodo]);
      setText('');
    }
  };
  //this method for set the current job callback function to prop for set thetask done or not
  const setJobStatution = cardİd => {
    const newJob = jobs.map(item => {
      if (cardİd == item.id) {
        console.log(item)
        return {...item, isComplated: !item.isComplated};
      }
      return item;
    });
    setjobs(newJob);
  };

  const deleteJob = index => {
    const newJob =  jobs.splice(index,1);
      
    setjobs(newJob);
  };

  //this method for calculating to how many active task we have
   const activeJobCount = () => {
    const arr = jobs.filter(item => {
      return item.isComplated == false;
    });
    setCount(arr.length);
  };
  useEffect(() => {
    console.log("use effect çalıştı")
    activeJobCount();
  }, [jobs]); 

  const renderCard = item => {
    console.log(item)
    return <Task currentTask={item} activeJob={setJobStatution} deleteJob={deleteJob}></Task>;
  };
  const {
    container,
    appbar,
    appBarTextStyle,
    inputStyle,
    bottom,
    buttonStyle,
    buttonText,
    container2,
    focusedbuttonStyle,
  } = styles;

  return (
    <SafeAreaView style={container}>
      <View style={container2}>
        <View style={appbar}>
          <Text style={appBarTextStyle}>Yapılacaklar</Text>
          <Text style={appBarTextStyle}>{count}</Text>
        </View>
        <View>
          <FlatList
            data={jobs}
            key={(item)=>{
              'key'+ item.id+index;
            }}
            
            renderItem={renderCard}
          />
        </View>
      </View>
      <View style={bottom}>
        <TextInput
          style={inputStyle}
          placeholder="Yapılacak İşinizi Ekleyin"
          value={text}
          onChangeText={text => setText(text)}
          onFocus={() => {
            setFocused(!focused);
          }}
          onSubmitEditing={() => {
            setFocused(!focused);
            setText('');
          }}
        />
        <View style={focused ? buttonStyle : focusedbuttonStyle}>
          <TouchableWithoutFeedback onPress={pushJob}>
            <Text style={buttonText}>Kaydet</Text>
          </TouchableWithoutFeedback>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'black',
  },

  appbar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: '10%',
  },
  container2: {
    justifyContent: 'flex-start',
  },
  appBarTextStyle: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'orange',
  },
  bottom: {
    backgroundColor: '#37474F',
    marginBottom: 10,
  },
  inputStyle: {
    borderBottomWidth: 1,
    borderColor: '#808080',
  },
  buttonStyle: {
    backgroundColor: '#808080',
    borderRadius: 20,
    margin: 10,
  },
  focusedbuttonStyle: {
    backgroundColor: 'orange',
    borderRadius: 20,
    margin: 10,
  },
  buttonText: {
    padding: 20,
    textAlign: 'center',
    color: 'white',
    fontSize: 15,
  },
  taskText: {
    color: 'white',
    fontSize: 15,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    textDecorationColor: '#000',
  },
});
export default App;
