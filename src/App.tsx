import { useState, useEffect, useRef } from 'react'
import './App.css'
import { List } from './components/List'
import { Form } from './components/Form'
import { Sub } from './types'


interface AppState {
	subs: Array<Sub>
	newSubsNumber: number
}

const INITIAL_STATE = [
	{
		nick: 'dapelu',
		subMonths: 3,
		avatar: 'https://i.pravatar.cc/150?u=dapelu',
		description: 'Dapelu hace de moderador a veces'
	},
	{
		nick: 'sergio_serrano',
		subMonths: 5,
		avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
	}
]


function App() {
	const [subs, setSubs] = useState<AppState['subs']>([])
	const [newSubsNumber, setNewSubsNumber] = useState<AppState['newSubsNumber']>(0)

	const divRef = useRef<HTMLDivElement>(null)



	useEffect(() => {
		setSubs(INITIAL_STATE)
	}, [])

	const handleNewSub = (newSub: Sub): void => {
		setSubs(subs => [...subs, newSub])
		setNewSubsNumber(n => n + 1)
	}


	return (
		<div ref={divRef}>
			<h1>deiv subs</h1>
			<List subs={subs} />
			New subs: {newSubsNumber}
			<Form onNewSub={handleNewSub} />
		</div>
	)
}

export default App
