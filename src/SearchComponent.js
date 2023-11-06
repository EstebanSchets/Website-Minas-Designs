import React, { useState } from 'react';
import algoliasearch from 'algoliasearch/lite';
import {
  InstantSearch,
  connectHits,
  connectSearchBox,
  Highlight,
  Snippet,
  Configure,
} from 'react-instantsearch-dom';

// Algolia search client initialization
const searchClient = algoliasearch('MXC1E9QBKG', '01926e7b1ba7261c49fb562397ca8aed');

// Custom search box component
const CustomSearchBox = connectSearchBox(({ currentRefinement, refine, isSearchStalled }) => (
  <input
    type="search"
    value={currentRefinement}
    onChange={event => refine(event.currentTarget.value)}
    placeholder="Search for products..."
    style={{
      width: '100%',
      padding: '1em',
      fontSize: '1em',
      border: '1px solid #ccc',
      borderRadius: '4px',
      textAlign: 'center',
    }}
  />
));

// Custom hits component
const Hits = connectHits(({ hits }) => (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(4, 1fr)',
      gridGap: '1rem',
      maxWidth: '1200px',
      margin: '0 auto',
    }}>
      {hits.map(hit => (
        <div key={hit.objectID} style={{
          border: '1px solid #ddd',
          padding: '1rem',
          borderRadius: '4px',
          minHeight: '250px',
        }}>
          <img
            src={hit.image}
            alt={hit.name}
            style={{ width: '100%', height: 'auto', objectFit: 'cover', marginBottom: '1rem' }}
          />
          <div style={{ fontWeight: 'bold' }}>#{hit.__position}</div>
          <div><Highlight attribute="name" hit={hit} tagName="mark" /></div>
          <div><Snippet attribute="description" hit={hit} tagName="mark" /></div>
          {hit.availability ? (
            <div style={{ color: 'green', fontWeight: 'bold' }}>In Stock</div>
          ) : (
            <div style={{ color: 'red', fontWeight: 'bold' }}>Out of Stock</div>
          )}
        </div>
      ))}
    </div>
  ));

const SearchComponent = () => {
  const [query, setQuery] = useState('');

  return (
    <InstantSearch
      searchClient={searchClient}
      indexName="dev_MINA"
      onSearchStateChange={({ query }) => setQuery(query)}
    >
      <Configure hitsPerPage={8} />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <CustomSearchBox />
      </div>
      {query && <Hits />}
      {/* Pagination removed to meet the requirements */}
    </InstantSearch>
  );
};

export default SearchComponent;
