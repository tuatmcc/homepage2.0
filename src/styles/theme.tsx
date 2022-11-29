import { extendTheme } from "@chakra-ui/react"
// Define global styles

const theme = extendTheme({
  styles: {
    global: {
      '.mdx-prose': {
        
        h1: {
          fontSize: '2em',
          fontWeight: 'bold',
          my: '1em',
          borderBottom: '1px solid',
        },
        h2: {
          fontSize: '1.5em',
          fontWeight: 'bold',
          my: '0.5em',
        },
        h3: {
          fontSize: '1.17em',
          fontWeight: 'bold',
          my: '4',
        },
        h4: {
          fontSize: '1em',
          fontWeight: 'bold',
          my: '4',
        },
        p: {
          
          my: '5',
          py: '2',
          overflowX: 'auto',
        },
        a: {
          color: '#00f',
          _hover: {
            textDecoration: 'underline',
          },
        },
        ul: {
          listStyleType: 'disc',
          listStylePosition: 'inside',
          my: '4',
        },
        ol: {
          listStyleType: 'decimal',
          listStylePosition: 'inside',
          my: '4',
        },
        li: {
          m: '4',
        },
        blockquote: {
          borderLeft: '4px solid #ccc',
          paddingLeft: '1em',
          fontStyle: 'italic',
          m: '4',
        },
        code: {
          backgroundColor: '#d0dde5',
          padding: '0.2em',
          paddingX: '0.4em',
          mx: '4',
          borderRadius: '0.4em',
        },
        pre: {
          backgroundColor: '#d0f5f0',
          color: '#000',
          padding: '1em',
          borderRadius: '0.2em',
          overflow: 'auto',
        },
        'pre code': {
          backgroundColor: 'transparent',
          padding: '0',
          borderRadius: '0',
        },
        table: {
          borderCollapse: 'collapse',
          borderSpacing: '0',
          width: '100%',
          m: '4',
          overflow: 'auto',
        },
        th: {
          border: '1px solid #dddddd',
          textAlign: 'left',
        },
        td: {
          border: '1px solid #dddddd',
          textAlign: 'left',
        },
        tr: {
          backgroundColor: '#dddddd',
        },
      },
    },
  },
})

export default theme