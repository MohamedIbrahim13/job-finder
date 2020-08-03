import React from 'react';
import JobList from './components/JobList';
import { Container } from 'react-bootstrap'
import JobsContextProvider from './contexts/fetchJobsContext';
import SearchForm from './components/SearchForm';


function App() {
  return (
    <Container className="my-4">
      <h1 className="mb-4">GitHub Jobs Finder</h1>
      <h4 className="mb-4">Daily Updates</h4>
      <JobsContextProvider>
        <SearchForm />
        <JobList />
      </JobsContextProvider>
    </Container>
  );
}

export default App;
