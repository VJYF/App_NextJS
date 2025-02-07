import styles from '../styles/Firstitem.module.css';

export default function Firstitem() {
    return (
        <>
        <div className={styles.dropdown}>

        <div className={styles.itemtitle}>
            Dropdown
        </div>
        <Dropdown />
        <ShowCode />
        </div>
        </>
    );
}

export function Dropdown() {
    return (
        <>
        <div className={styles.dropdowncard}>
            <div className={styles.dropdownbtn}>Dropdown</div>
            <div className={styles.dropdowncontent}>
                <a href="#">Link 1</a>
                <a href="#">Link 2</a>
                <a href="#">Link 3</a>
            </div>
        </div>
        </>
    );
}

export function ShowCode(){
    return(
        <>
        <div className={styles.codecontainer}>
            <pre>
                <code className={styles.code}>
                    <div>HTML</div>
                    {`
<div className={styles.dropdowncard}>
    <div className={styles.dropdownbtn}>Dropdown</div>
        <div className={styles.dropdowncontent}>
            <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a>
        </div>
    </div>
</div>`}
                </code>
                <code className={styles.code}>
                    <div>CSS</div>
                    {`
.dropdown{
    border: 1px solid#eaeaea;
    border-radius: 10px;
    padding: 2em;
    display: flex;
    background-color: #e4e4e4f5;
}
 
.dropdown:hover{
    border: 1px solid #656c74;    
}
     
.dropdowncard{
    border: 1px solid #eaeaea;
    border-radius: 10px;
    margin: 2em;
    background-color: #000000;
}
.dropdowncard:hover{
    border: 1px solid #656c74;
    border-radius: 10px 10px 0px 0px;
}
             
.dropdownbtn{
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1rem;
}

.dropdownbtn:hover{
    background-color: #f0f0f0;
    color: #000;
    border-radius: 10px 10px 0px 0px;
}
    
.dropdowncontent{
    display: none;
    position: absolute;
    background-color: #f9f9f9;
    min-width: 109px;
    z-index: 1;
    border-bottom: 1px solid #656c74;
    border-left: 1px solid #656c74;
    border-right: 1px solid #656c74;
    border-radius: 0px 0px 10px 10px;
}
  
  
.dropdowncontent a{
    color: black;
    padding: 12px 16px;
    text-decoration: none;
    display: block;
}
      
.dropdowncontent a:hover{
    background-color: black;
    color: white;
}
          
.dropdowncard:hover .dropdowncontent{
    display: block;
}
              `}
                </code>
            </pre>
        </div>

        </>
    );
}