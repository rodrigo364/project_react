import React, { Component } from 'react';
import Table from './Table';
import Form from './components/Form';

class App extends Component {
    state = {
        characters: [],
        test: 'test'
    };

    removeCharacter = index => {
        const { characters,test } = this.state;
    
        this.setState({
            characters: characters.filter((character, i) => { 
                return i !== index;
            }),

            test: 'removed'
        });
    }

    handleSubmit = character => {
        this.setState({characters: [...this.state.characters, character]});
    }

    render() {
        const { characters,test } = this.state;
        
        return (
            <div className="container">
                <h1>React Tutorial - {test}</h1>
                <p>Add a character with a name and a job to the table.</p>
                <Table
                    characterData={characters}
                    removeCharacter={this.removeCharacter}
                />
                <h3>Add New</h3>
                <Form handleSubmit={this.handleSubmit} />
            </div>
        );
    }
}

export default App;