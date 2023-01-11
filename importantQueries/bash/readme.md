# Table of Contents

- [Table of Contents](#table-of-contents)  
   * [<ins>Convert mp3 files to wav</ins></ins>](#convert-mp3-files-to-wav)  




### Convert mp3 files to wav
---
- You can use a loop in combination with the ffmpeg command to convert all mp3 files in a folder to 16000 Hz, 8000 bit mono wav files.

Here's an example command you can use:

```sql
for file in *.mp3; do ffmpeg -i "$file" -ac 1 -ar 16000 -b:a 8000 -acodec pcm_s16le "${file%.mp3}_8000_mono.wav"; done
```
- This command:

    - `for file in *.mp3` : selects all mp3 files in the current directory
    - `do` : starts a loop
    - `ffmpeg -i "$file" -ac 1 -ar 16000 -b:a 8000 -acodec pcm_s16le "${file%.mp3}_8000_mono.wav"` : 
    for each file, it runs the `ffmpeg` command converting the mp3 - - file to wav file with the options I mentioned before
    - `done` : ends the loop
- It's important to note that, the command above will use the `ffmpeg` command to convert each mp3 file to a .wav file with the name pattern "{filename}_8000_mono.wav" where the original name for the mp3 file is "{filename}.mp3".

- Please be careful when running such commands, and make sure you are in the correct folder, and that you have enough free space to store all the new files. Also, it is a good practice to make a backup of your files before renaming them.