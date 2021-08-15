<script lang="ts">
  interface Author {
    name: string
    year: number
    month: number
  }
  export let author: Author;
  </script>
  
  <p>created by {author.name} ({author.year}/{author.month})</p>
  
  <style>
    p {
      font-size: 0.75rem;
    }
  </style>
  