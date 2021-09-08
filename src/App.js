import logo from './logo.svg';
import './App.css';
import CustomHook from './hooks/ListHook'

function App() {
    const array = ['Huyen', 'Hoa', 'Hung', 'Long']
    const [name, changeNewName, addName, arrayList] = CustomHook(array)
  
    return (
        <div className="App">
            <p>学生一覧：[ {array[0]}, {array[1]}, {array[2]}, {array[3]} ]</p>
            <p>追加する名前を入力してください。</p>
            <input value={name} onChange={changeNewName} />
            <button onClick={addName} >確定</button>
            <p>追加する名前： {name}</p>
        </div>
    );
}

export default App;