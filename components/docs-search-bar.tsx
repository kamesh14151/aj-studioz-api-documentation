import { useState, useRef, useEffect, useMemo } from "react";
import { AnimatePresence, motion } from "framer-motion";
import clsx from "clsx";
import { Search } from "lucide-react";

// Documentation-specific search data
const docsSearchData = [
  "AJ STUDIOZ API",
  "Available Models",
  "API Endpoints", 
  "Code Examples",
  "Authentication",
  "Chat Completions",
  "Claude 3.5 Sonnet",
  "GPT-4 Turbo",
  "Gemini Pro",
  "Quick Start",
  "Python SDK",
  "JavaScript SDK",
  "Rate Limits",
  "Error Handling",
  "Streaming",
  "NEXARIQ Lynxa Pro",
  "Local Models",
  "Billing",
  "Status",
];

const useDebounce = (value: string, delay: number) => {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
};

const GooeyFilter = () => {
  return (
    <svg aria-hidden="true" className="absolute">
      <defs>
        <filter id="goo-effect-docs">
          <feGaussianBlur in="SourceGraphic" stdDeviation="5" result="blur" />
          <feColorMatrix
            in="blur"
            type="matrix"
            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -15"
            result="goo"
          />
          <feComposite in="SourceGraphic" in2="goo" operator="atop" />
        </filter>
      </defs>
    </svg>
  );
};

const SearchIcon = ({ isUnsupported }: { isUnsupported: boolean }) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 0.8,
        x: -4,
        filter: isUnsupported ? "none" : "blur(5px)",
      }}
      animate={{
        opacity: 1,
        scale: 1,
        x: 0,
        filter: "blur(0px)",
      }}
      exit={{
        opacity: 0,
        scale: 0.8,
        x: -4,
        filter: isUnsupported ? "none" : "blur(5px)",
      }}
      transition={{
        delay: 0.1,
        duration: 1,
        type: "spring",
        bounce: 0.15,
      }}
    >
      <Search className="h-4 w-4" />
    </motion.div>
  );
};

const LoadingIcon = () => {
  return (
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
      className="h-4 w-4"
    >
      <Search className="h-4 w-4 opacity-50" />
    </motion.div>
  );
};

const InfoIcon = ({ index }: { index: number }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: index * 0.1 + 0.2 }}
      className="flex items-center justify-center w-4 h-4 rounded-full bg-blue-100 dark:bg-blue-900/20"
    >
      <Search className="h-2.5 w-2.5 text-blue-600 dark:text-blue-400" />
    </motion.div>
  );
};

const buttonVariants = {
  step1: {
    width: "auto",
    paddingLeft: "12px",
    paddingRight: "12px",
  },
  step2: {
    width: "280px",
    paddingLeft: "16px",
    paddingRight: "48px",
  },
};

const iconVariants = {
  hidden: { opacity: 0, scale: 0.8, x: 10 },
  visible: { opacity: 1, scale: 1, x: 0 },
};

const getResultItemVariants = (index: number, isUnsupported: boolean) => ({
  initial: {
    opacity: 0,
    y: 20,
    scale: 0.95,
    filter: isUnsupported ? "none" : "blur(10px)",
  },
  animate: {
    opacity: 1,
    y: 0,
    scale: 1,
    filter: "blur(0px)",
  },
  exit: {
    opacity: 0,
    y: -10,
    scale: 0.95,
    filter: isUnsupported ? "none" : "blur(5px)",
  },
});

const getResultItemTransition = (index: number) => ({
  delay: index * 0.1 + 0.2,
  duration: 0.5,
  type: "spring",
  bounce: 0.15,
});

const isUnsupportedBrowser = () => {
  if (typeof window === "undefined") return false;
  
  const userAgent = navigator.userAgent.toLowerCase();
  const isFirefox = userAgent.indexOf("firefox") > -1;
  const isSafari = userAgent.indexOf("safari") > -1 && userAgent.indexOf("chrome") === -1;
  
  return isFirefox || isSafari;
};

interface DocsSearchBarProps {
  onResultClick?: (result: string) => void;
}

export const DocsSearchBar = ({ onResultClick }: DocsSearchBarProps) => {
  const inputRef = useRef<HTMLInputElement>(null);

  const [state, setState] = useState({
    step: 1,
    searchData: [] as string[],
    searchText: "",
    isLoading: false,
  });

  const debouncedSearchText = useDebounce(state.searchText, 300);
  const isUnsupported = useMemo(() => isUnsupportedBrowser(), []);

  const handleButtonClick = () => {
    setState((prevState) => ({ ...prevState, step: 2 }));
  };

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prevState) => ({ ...prevState, searchText: e.target.value }));
  };

  const handleResultClick = (result: string) => {
    onResultClick?.(result);
    setState((prevState) => ({ ...prevState, step: 1, searchText: "", searchData: [] }));
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Escape") {
      setState((prevState) => ({ ...prevState, step: 1, searchText: "", searchData: [] }));
    }
  };

  useEffect(() => {
    if (state.step === 2) {
      inputRef.current?.focus();
    } else {
      setState((prevState) => ({
        ...prevState,
        searchText: "",
        searchData: [],
        isLoading: false,
      }));
    }
  }, [state.step]);

  useEffect(() => {
    let isCancelled = false;

    if (debouncedSearchText) {
      setState((prevState) => ({ ...prevState, isLoading: true }));

      const fetchData = async () => {
        try {
          // Simulate API delay
          await new Promise((resolve) => setTimeout(resolve, 200));

          const filteredData = docsSearchData.filter((item) =>
            item
              .toLowerCase()
              .includes(debouncedSearchText.trim().toLowerCase())
          );

          if (!isCancelled) {
            setState((prevState) => ({
              ...prevState,
              searchData: filteredData.slice(0, 6), // Limit to 6 results
              isLoading: false,
            }));
          }
        } catch {
          if (!isCancelled) {
            setState((prevState) => ({ ...prevState, isLoading: false }));
          }
        }
      };

      fetchData();
    } else {
      setState((prevState) => ({
        ...prevState,
        searchData: [],
        isLoading: false,
      }));
    }

    return () => {
      isCancelled = true;
    };
  }, [debouncedSearchText]);

  // Close search when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (inputRef.current && !inputRef.current.closest('.docs-search-wrapper')?.contains(event.target as Node)) {
        setState((prevState) => ({ ...prevState, step: 1, searchText: "", searchData: [] }));
      }
    };

    if (state.step === 2) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [state.step]);

  return (
    <div className={clsx("docs-search-wrapper relative", isUnsupported && "no-goo")}>
      <GooeyFilter />
      
      <div className="relative">
        <motion.div
          className="relative overflow-hidden rounded-md border bg-background"
          initial="step1"
          animate={state.step === 1 ? "step1" : "step2"}
          variants={buttonVariants}
          transition={{ duration: 0.4, type: "spring", bounce: 0.15 }}
          style={{
            filter: isUnsupported ? "none" : "url(#goo-effect-docs)",
          }}
        >
          {/* Search Results Dropdown */}
          <AnimatePresence>
            {state.step === 2 && state.searchData.length > 0 && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full left-0 right-0 mt-2 bg-background border rounded-md shadow-lg z-50 max-h-64 overflow-y-auto"
              >
                <AnimatePresence mode="popLayout">
                  {state.searchData.map((item, index) => (
                    <motion.button
                      key={item}
                      onClick={() => handleResultClick(item)}
                      whileHover={{ backgroundColor: "hsl(var(--accent))" }}
                      variants={getResultItemVariants(index, isUnsupported)}
                      initial="initial"
                      animate="animate"
                      exit="exit"
                      transition={getResultItemTransition(index)}
                      className="w-full px-4 py-3 text-left hover:bg-accent transition-colors flex items-center gap-3 border-b last:border-b-0"
                    >
                      <InfoIcon index={index} />
                      <motion.span
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: index * 0.12 + 0.3 }}
                        className="text-sm"
                      >
                        {item}
                      </motion.span>
                    </motion.button>
                  ))}
                </AnimatePresence>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Search Button/Input */}
          <motion.button
            onClick={handleButtonClick}
            whileHover={{ scale: state.step === 2 ? 1 : 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="relative flex items-center gap-2 h-9 text-sm text-muted-foreground hover:text-foreground transition-colors w-full"
            disabled={state.step === 2}
          >
            {state.step === 1 ? (
              <>
                <Search className="h-4 w-4" />
                <span>Search</span>
                <kbd className="pointer-events-none ml-auto hidden h-5 select-none items-center gap-0.5 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
                  <span>⌘</span>K
                </kbd>
              </>
            ) : (
              <input
                ref={inputRef}
                type="text"
                className="w-full bg-transparent outline-none placeholder:text-muted-foreground"
                placeholder="Search documentation..."
                value={state.searchText}
                onChange={handleSearch}
                onKeyDown={handleKeyDown}
                aria-label="Search documentation"
              />
            )}
          </motion.button>

          {/* Search/Loading Icon */}
          <AnimatePresence mode="wait">
            {state.step === 2 && (
              <motion.div
                key="icon"
                className="absolute right-3 top-1/2 -translate-y-1/2"
                initial="hidden"
                animate="visible"
                exit="hidden"
                variants={iconVariants}
                transition={{
                  delay: 0.1,
                  duration: 0.4,
                  type: "spring",
                  bounce: 0.15,
                }}
              >
                {!state.isLoading ? (
                  <SearchIcon isUnsupported={isUnsupported} />
                ) : (
                  <LoadingIcon />
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
};