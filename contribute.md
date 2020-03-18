## തിരുത്തലുകൾക്കും കൂട്ടിച്ചേർക്കലിനും

---

ഇതൊരു ക്രൗഡ് സോഴ്‌സ്ഡ് ഗൈഡാണ്.നിങ്ങൾക്കും ഇതിൽ കൂട്ടിച്ചേർത്തലുകൾ നടത്താം അതിനായ് ഈ ഗൈഡ് പിൻതുടരുക. 

---

### GitHub ഉപോയാഗിച്ച എങ്ങനെ തിരുത്തുകൾ നടത്താം

---

#### 1. Github ൽ ലോഗിൻ ചെയ്യുക 

#### 2. covid19-awareness എന്ന Github  റിപ്പോസിറ്ററി  സന്ദർശിക്കുക 

[Goto Repository](https://github.com/ishamsu/covid19-awareness)

<!-- ![fork](https://raw.githubusercontent.com/ishamsu/covid19-awareness/master/docs/assets/img/githubrepo.png) -->

#### 3. റിപ്പോസിറ്ററി ഫോർക് ചെയ്യുക
 

#### 4. ഫയൽ എഡിറ്റ് ചെയ്യുകയോ ആവശ്യമുള്ള കൂട്ടിച്ചേർത്തലുകൾ വരുത്തുകയോ ചെയ്യുക 

1. ആവശ്യമായ ഫയൽ കണ്ടെത്തി എഡിറ്റ് ചെയ്യുക 
2. ആവശ്യമെങ്കിൽ .md ഫോർമാറ്റിൽ  പുതിയ ഫയൽ നിർമിക്കുക 
3. സ്ക്രിപ്റ്റ് അപ്‌ഡേറ്റ് ചെയ്യുന്നതിന് മാർക്ക്ഡൗൺ ഭാഷ ഉപയോഗിക്കുക.
4. Make a Pull Request.

### For developers

---
1. Fork the Repository
2. Edit the file you wanted.
    * use Markdown language
4. Install Node.js 
5. Open your terminal and *install gh-markdown-cli* by typing,
```npm install gh-markdown-cli -g```

6. Go to the cloned repository
```cd covid19-awareness ```

7. Now build the site to html again, include the header and footer by running 
```mdown --input "**/faq.md" --output html --header header.html --footer footer.html```

* (where faq.md is the file you edited or you're contributed.)

8. Now a html file is generated in html folder of the repo and move this file to public folder.
9. Finally make a push request on GitHub for merging.


