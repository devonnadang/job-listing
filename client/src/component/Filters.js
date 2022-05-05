import React from 'react';
import styles from './Filters.module.css'

class Filters extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            search: '',
            type: '',
            location: '',
            experience: '',
            salary: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserInput (e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value}); 
      }

    handleSubmit (e){
        alert("search: " + this.state.search + "\ntype: " + this.state.type);
    }

    render() { 
        return(
            <form onSubmit={this.handleSubmit}>
                <input 
                    className={styles.search}
                    type="text"  
                    name="search"
                    placeholder='Search Jobs...'
                    value={this.state.search}
                    onChange={
                        (event) => this.handleUserInput(event)}/>
                <select 
                    className={styles.type}
                    name="type" 
                    onChange={
                        (event) => this.handleUserInput(event)}>
                    <option value='' label='Type'/>
                    <option value='internship' label='Intern'/>
                    <option value='part time' label='Part Time'/>
                    <option value='full time' label='Full Time'/>
                    </select>
                <select 
                    className={styles.location}
                    name="location" 
                    onChange={
                        (event) => this.handleUserInput(event)}>
                    <option value='' label='location'/>
                    <option value='work from home' label='Work From Home'/>
                    <option value='work from office' label='Work From Office'/>
                    </select>
                 <select
                    className={styles.experience}
                    name="experience" 
                    onChange={
                        (event) => this.handleUserInput(event)}>
                    <option value='' label='experience'/>
                    <option value='entry level' label='Entry Level'/>
                    <option value='middle' label='Middle'/>
                    <option value='senior' label='Senior Position'/>
                    </select>
                <select 
                    className={styles.salary}
                    name="salary" 
                    onChange={
                        (event) => this.handleUserInput(event)}>
                    <option value='' label='salary'/>
                    <option value='0-50k' label='$0-$50,000'/>
                    <option value='50k-100k' label='$50,000-$100,000'/>
                    <option value='100k-150k' label='$100,000-$150,000'/>
                    <option value='150k+' label='$150,000+'/>
                    </select>
                <button
                    className={styles.submit}
                    type="submit"
                    name="apply">
                    Apply
                </button>
            </form>
        );
    }
}

export default Filters