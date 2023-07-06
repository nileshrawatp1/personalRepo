# Table of Contents

- [Table of Contents](#table-of-contents)
    - [Convert mp3 files to wav](#convert-mp3-files-to-wav)
    - [Rename all Files inside folder](#rename-all-files-inside-folder)




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

### Rename all Files inside folder 
- This script seperates the name with underscore (_) and adds _Eng.wav after that

```sql
#!/bin/bash

# Specify the directory containing the .wav files
directory="/home/nilesh/Music/Imarque/English Prompts"

# Change to the specified directory
cd "$directory"

# Iterate over all .wav files in the directory
for file in *.wav; do
    # Get the filename without the extension
    filename="${file%.*}"

    # Extract the part before the underscore
    new_filename=$(echo "$filename" | awk -F_ '{print tolower(substr($1,1,1)) substr($1,2)}')

    # Append 'Eng.wav' to the new filename
    new_filename="${new_filename}_Eng.wav"

    # Rename the file
    mv "$file" "$new_filename"
done
```