export const patterns = [
  {
    id: 1,
    name: "Traversal",
    emoji: "🔍",
    level: "Foundation",
    color: "#6366f1",
    completed: true,
    description: "String ke har character ko ek ek karke visit karna",
    leetcode: [],
    gfg: []
  },
  {
    id: 2,
    name: "Frequency Count",
    emoji: "📊",
    level: "Foundation",
    color: "#6366f1",
    completed: true,
    description: "Har character kitni baar aaya count karna",
    leetcode: [],
    gfg: []
  },
  {
    id: 3,
    name: "Character Hashing",
    emoji: "#️⃣",
    level: "Foundation",
    color: "#6366f1",
    completed: true,
    description: "HashMap se character frequency track karna",
    leetcode: [],
    gfg: []
  },
  {
    id: 4,
    name: "Reverse String",
    emoji: "🔄",
    level: "Pointers",
    color: "#8b5cf6",
    completed: true,
    description: "String ko reverse karna two pointers se",
    leetcode: [],
    gfg: []
  },
  {
    id: 5,
    name: "Palindrome",
    emoji: "🪞",
    level: "Pointers",
    color: "#8b5cf6",
    completed: true,
    description: "String aage se aur peeche se same hai ya nahi",
    leetcode: [],
    gfg: []
  },
  {
    id: 6,
    name: "Two Pointers",
    emoji: "👆",
    level: "Pointers",
    color: "#8b5cf6",
    completed: true,
    description: "Do pointer se string problems solve karna",
    leetcode: [],
    gfg: []
  },
  {
    id: 7,
    name: "Sliding Window",
    emoji: "🪟",
    level: "Windows",
    color: "#06b6d4",
    completed: true,
    description: "Window slide karke substrings check karna",
    leetcode: [],
    gfg: []
  },
  {
    id: 8,
    name: "Anagram",
    emoji: "🔀",
    level: "Windows",
    color: "#06b6d4",
    completed: true,
    description: "Same characters different order — frequency match",
    leetcode: [],
    gfg: []
  },
  {
    id: 9,
    name: "Substring",
    emoji: "✂️",
    level: "Windows",
    color: "#06b6d4",
    completed: true,
    description: "Continuous part of string — sliding window + DP",
    leetcode: [],
    gfg: []
  },
  {
    id: 10,
    name: "Subsequence",
    emoji: "🧵",
    level: "Advanced String",
    color: "#10b981",
    completed: true,
    concept: "Order same rehna chahiye, continuous hona zaroori nahi.",
    visualization: "A B C D E\n↑   ↑   ↑\nA   C   E  → ✅ Valid",
    algorithm: [
      "Pointer i for string s",
      "Pointer j for string t",
      "If characters match: j++",
      "Always: i++",
      "If j reaches end → Subsequence ✅"
    ],
    template: `while(i < n && j < m) {\n  if(s[i] == t[j])\n    j++;\n  i++;\n}\nreturn j == m;`,
    code: `bool isSubsequence(string s, string t) {\n  int i = 0, j = 0;\n  while(i < s.size() && j < t.size()) {\n    if(s[i] == t[j]) j++;\n    i++;\n  }\n  return j == t.size();\n}`,
    complexity: { time: "O(N)", space: "O(1)" },
    keywords: ["order maintain", "skip characters", "longest common sequence", "matching sequence"],
    leetcode: [
      { name: "Is Subsequence", url: "https://leetcode.com/problems/is-subsequence/", difficulty: "Easy" },
      { name: "Number of Matching Subsequences", url: "https://leetcode.com/problems/number-of-matching-subsequences/", difficulty: "Medium" },
      { name: "Delete Operation for Two Strings", url: "https://leetcode.com/problems/delete-operation-for-two-strings/", difficulty: "Medium" },
      { name: "Uncrossed Lines", url: "https://leetcode.com/problems/uncrossed-lines/", difficulty: "Medium" },
      { name: "Longest Common Subsequence", url: "https://leetcode.com/problems/longest-common-subsequence/", difficulty: "Medium" },
      { name: "Distinct Subsequences", url: "https://leetcode.com/problems/distinct-subsequences/", difficulty: "Hard" },
      { name: "Shortest Common Supersequence", url: "https://leetcode.com/problems/shortest-common-supersequence/", difficulty: "Hard" },
      { name: "Longest Arithmetic Subsequence", url: "https://leetcode.com/problems/longest-arithmetic-subsequence/", difficulty: "Medium" },
      { name: "Maximum Length of Repeated Subarray", url: "https://leetcode.com/problems/maximum-length-of-repeated-subarray/", difficulty: "Medium" },
      { name: "Wildcard Matching", url: "https://leetcode.com/problems/wildcard-matching/", difficulty: "Hard" },
      { name: "Regular Expression Matching", url: "https://leetcode.com/problems/regular-expression-matching/", difficulty: "Hard" },
      { name: "Distinct Subsequences II", url: "https://leetcode.com/problems/distinct-subsequences-ii/", difficulty: "Hard" }
    ],
    gfg: [
      { name: "Check for Subsequence", url: "https://www.geeksforgeeks.org/problems/check-for-subsequence4930/1", difficulty: "Easy" },
      { name: "Longest Common Subsequence", url: "https://www.geeksforgeeks.org/problems/longest-common-subsequence-1587115620/1", difficulty: "Medium" },
      { name: "Print LCS", url: "https://www.geeksforgeeks.org/problems/print-lcs/0", difficulty: "Medium" },
      { name: "Shortest Common Supersequence", url: "https://www.geeksforgeeks.org/problems/shortest-common-supersequence0322/1", difficulty: "Medium" },
      { name: "Count Distinct Subsequences", url: "https://www.geeksforgeeks.org/problems/number-of-distinct-subsequences0909/1", difficulty: "Hard" }
    ]
  },
  {
    id: 11,
    name: "Prefix Matching",
    emoji: "🌲",
    level: "Advanced String",
    color: "#10b981",
    completed: true,
    concept: "String ka starting part. Real-life example: Google Search suggestions (ca → car, cat, camera).",
    visualization: "flower\nflow  \nflight\n\nf==f==f → fl==fl → o!=i → STOP\nAnswer: fl",
    algorithm: [
      "Assume first string is prefix",
      "Compare with every other string",
      "Reduce prefix until match found (pop_back)",
      "Return remaining prefix"
    ],
    template: `// Check prefix:\nif(s.rfind(prefix, 0) == 0) {\n  // Match found\n}`,
    code: `string longestCommonPrefix(vector<string>& strs) {\n  string prefix = strs[0];\n  for(int i = 1; i < strs.size(); i++) {\n    while(strs[i].find(prefix) != 0)\n      prefix.pop_back();\n  }\n  return prefix;\n}`,
    complexity: { time: "O(N × M)", space: "O(1)" },
    keywords: ["starts with", "prefix", "auto complete", "dictionary search", "suggestions"],
    leetcode: [
      { name: "Longest Common Prefix", url: "https://leetcode.com/problems/longest-common-prefix/", difficulty: "Easy" },
      { name: "String Matching in an Array", url: "https://leetcode.com/problems/string-matching-in-an-array/", difficulty: "Easy" },
      { name: "Check If Word Occurs As a Prefix", url: "https://leetcode.com/problems/check-if-a-word-occurs-as-a-prefix-of-any-word-in-a-sentence/", difficulty: "Easy" },
      { name: "Count Prefixes of a Given String", url: "https://leetcode.com/problems/count-prefixes-of-a-given-string/", difficulty: "Easy" },
      { name: "Find Words Containing Character", url: "https://leetcode.com/problems/find-words-containing-character/", difficulty: "Easy" },
      { name: "Implement Trie (Prefix Tree)", url: "https://leetcode.com/problems/implement-trie-prefix-tree/", difficulty: "Medium" },
      { name: "Replace Words", url: "https://leetcode.com/problems/replace-words/", difficulty: "Medium" },
      { name: "Search Suggestions System", url: "https://leetcode.com/problems/search-suggestions-system/", difficulty: "Medium" },
      { name: "Map Sum Pairs", url: "https://leetcode.com/problems/map-sum-pairs/", difficulty: "Medium" },
      { name: "Design Add and Search Words", url: "https://leetcode.com/problems/design-add-and-search-words-data-structure/", difficulty: "Medium" },
      { name: "Word Search II", url: "https://leetcode.com/problems/word-search-ii/", difficulty: "Hard" },
      { name: "Stream of Characters", url: "https://leetcode.com/problems/stream-of-characters/", difficulty: "Hard" },
      { name: "Concatenated Words", url: "https://leetcode.com/problems/concatenated-words/", difficulty: "Hard" }
    ],
    gfg: [
      { name: "Longest Common Prefix", url: "https://www.geeksforgeeks.org/problems/longest-common-prefix-in-an-array5129/1", difficulty: "Easy" },
      { name: "Implement Trie", url: "https://www.geeksforgeeks.org/problems/trie-insert-and-search0651/1", difficulty: "Medium" },
      { name: "Auto Complete Feature using Trie", url: "https://www.geeksforgeeks.org/problems/auto-complete-feature-using-trie/1", difficulty: "Hard" },
      { name: "Word Search", url: "https://www.geeksforgeeks.org/problems/word-search/1", difficulty: "Medium" }
    ]
  },
  {
    id: 12,
    name: "KMP Algorithm",
    emoji: "⚡",
    level: "Advanced String",
    color: "#10b981",
    completed: true,
    concept: "Pattern matching O(N×M) se O(N+M) mein. LPS Array (Longest Prefix Suffix) use karta hai.",
    visualization: "Text:    A B A B D A B A B\nPattern: A B A B C\n\nMismatch? Don't restart!\nUse LPS → Jump intelligently ⚡",
    algorithm: [
      "Build LPS array for pattern",
      "i pointer for text, j for pattern",
      "Match: i++, j++",
      "Mismatch: if j!=0 → j=lps[j-1], else i++",
      "When j==pattern.size() → Found at i-j"
    ],
    template: `// LPS Build:\nif(pat[i]==pat[len]) { len++; lps[i]=len; i++; }\nelse { if(len!=0) len=lps[len-1]; else { lps[i]=0; i++; } }`,
    code: `vector<int> buildLPS(string pat) {\n  int n = pat.size();\n  vector<int> lps(n, 0);\n  int len = 0, i = 1;\n  while(i < n) {\n    if(pat[i] == pat[len]) { len++; lps[i]=len; i++; }\n    else {\n      if(len != 0) len = lps[len-1];\n      else { lps[i]=0; i++; }\n    }\n  }\n  return lps;\n}`,
    complexity: { time: "O(N + M)", space: "O(M)" },
    keywords: ["pattern matching", "string search", "find occurrence", "prefix-suffix", "repeated pattern"],
    leetcode: [
      { name: "Find First Occurrence in a String", url: "https://leetcode.com/problems/find-the-index-of-the-first-occurrence-in-a-string/", difficulty: "Easy" },
      { name: "Repeated Substring Pattern", url: "https://leetcode.com/problems/repeated-substring-pattern/", difficulty: "Easy" },
      { name: "String Matching in an Array", url: "https://leetcode.com/problems/string-matching-in-an-array/", difficulty: "Easy" },
      { name: "Repeated String Match", url: "https://leetcode.com/problems/repeated-string-match/", difficulty: "Medium" },
      { name: "Longest Happy Prefix", url: "https://leetcode.com/problems/longest-happy-prefix/", difficulty: "Hard" },
      { name: "Shortest Palindrome", url: "https://leetcode.com/problems/shortest-palindrome/", difficulty: "Hard" },
      { name: "Sum of Scores of Built Strings", url: "https://leetcode.com/problems/sum-of-scores-of-built-strings/", difficulty: "Hard" },
      { name: "Distinct Echo Substrings", url: "https://leetcode.com/problems/distinct-echo-substrings/", difficulty: "Hard" },
      { name: "Substring with Concatenation of All Words", url: "https://leetcode.com/problems/substring-with-concatenation-of-all-words/", difficulty: "Hard" },
      { name: "Longest Duplicate Substring", url: "https://leetcode.com/problems/longest-duplicate-substring/", difficulty: "Hard" }
    ],
    gfg: [
      { name: "KMP Algorithm", url: "https://www.geeksforgeeks.org/problems/search-pattern-kmp-algorithm/1", difficulty: "Medium" },
      { name: "Longest Happy Prefix", url: "https://www.geeksforgeeks.org/problems/longest-prefix-suffix2527/1", difficulty: "Hard" },
      { name: "Repeated Substring Pattern", url: "https://www.geeksforgeeks.org/problems/repeated-sub-string/1", difficulty: "Easy" }
    ]
  }
];

export const levels = [
  { name: "Foundation", patterns: [1,2,3], color: "#6366f1", bg: "#1e1b4b" },
  { name: "Pointers", patterns: [4,5,6], color: "#8b5cf6", bg: "#2e1065" },
  { name: "Windows", patterns: [7,8,9], color: "#06b6d4", bg: "#083344" },
  { name: "Advanced String", patterns: [10,11,12], color: "#10b981", bg: "#052e16" }
];
