import React, { useEffect } from 'react';

/**
 * Context for metadata
 */

export type Article = {
  image: string;
  src: string;
  date: string;
  title: string;
};

export type Metadata = {
  articles: Article[];
  isLoaded: boolean;
};

const DEFAULT_METADATA = {
  articles: [],
  isLoaded: false,
};

const MetadataContext = React.createContext<Metadata>(DEFAULT_METADATA);

export const MetadataContextProvider = ({
  children,
}: React.PropsWithChildren) => {
  const [metadataJson, setMetadataJson] = React.useState<Metadata>();

  useEffect(() => {
    fetch('/metadata.json')
      .then(res => {
        return res.json();
      })
      .then(data => {
        if (data?.articles?.length) {
          setMetadataJson({
            ...data,
            isLoaded: true,
          });
        }
      });
  }, []);

  return (
    <MetadataContext.Provider value={metadataJson ?? DEFAULT_METADATA}>
      {children}
    </MetadataContext.Provider>
  );
};

// eslint-disable-next-line @typescript-eslint/no-non-null-assertion, react-refresh/only-export-components
export const useMetadata = () => React.useContext(MetadataContext)!;
