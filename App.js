import {empData} from './components/emp.jsx'
import {useState,useEffect} from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik';
import * as Yup from 'yup'
import "./style.css"; 
const View=()=>{

  const [id1,setId]=useState(0)
  const [name1,setName]=useState("")
  const [data,setData]=useState([])
  useEffect(()=>{
    setData(empData);
  },[])
  const initialValues={
    id1:'',
    name1:''
  }
  const validationSchema=Yup.object().shape({
    id1:Yup.string() 
    .required("Id cant be empty") ,
    name1:Yup.string() 
    .required("Name1 cant be empty") ,
    

  });
  const handleSubmit=(values)=>{
    const {id1,name1}=values;
    
    AddData(id1,name1);
  }
  
  const AddData=(id1,name1)=>{
    const newData=[...data]
    const record={id:id1,name:name1}
    newData.push(record);
    setData(newData);
  }

  return(
    
    <Formik 
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}>
        {() => (
        <Form>
          <h1>Add Data</h1>
          <div>
            Id: <Field type='text' name='id1' />
            <ErrorMessage name="id1" component="div" className="color"/>
          </div>
          <div>
            Name: <Field type='text' name='name1' />
            <ErrorMessage name="name1" component="div" />
          </div>
          <button type="submit">Add</button>
          {
            data.map((item)=>{
              return <div key={item.id}>{item.id}, {item.name}</div>
            })
          }
        </Form>
      )}
       
      </Formik>
      
      
  


  );
}
function App() {
  return (
    <>
      <View/>    
    </>
  );
}

export default App;
