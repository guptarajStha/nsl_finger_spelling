vowel =['अ','आ', 'इ', 'ई', 'उ', 'ऊ', 'ए', 'ऐ', 'ओ', 'औ']
symbol =['अ', 'ा', 'ि', 'ी', 'ु', 'ू', 'े', 'ै', 'ो', 'ौ']
def joinLetter(letter):
    a=[]
    def extract(present,prev):
        if present in vowel:
            count = vowel.index(present)
            return prev + symbol[count]
        else:
            return "" 
    length = len(letter)
    if length<3:
        prev = letter[0]
        present= letter[1]
        count_present =0
        for j in vowel:  
            if present == j:
                count_present += 1
        if count_present == 1:
            combined = extract(present, prev)
            a.append(combined)
        else: 
            a.append(prev)
            a.append(present)

    else: 
        i = 1
        while i < length:
            prev = letter[i-1]
            present = letter[i]
            count_prev = 0
            count_present = 0
            for j in vowel:
                if prev == j:
                    count_prev += 1
                if present == j:
                    count_present += 1

            if count_present != 1 and count_prev != 1:
                if i== length -1:
                    a.append(prev)
                    a.append(present)
                    i+=1
                else: 
                    a.append(prev)
                    i+=1
            elif count_present == 1 and count_prev != 1:
                combined = extract(present, prev)
                if i == length - 1:
                    a.append(combined)
                    i+=1
                else:
                    a.append(combined)
                    if((i+2)>(length)):
                        a.append(letter[i+1])
                        i+=1
                    elif((i+2)==length):
                        a.append(letter[i+1])
                        i+=2
                    else: 
                        i+=2
            
            elif count_present == 1 and count_prev == 1:
                if i == length - 1:
                    a.append(prev)
                    a.append(present)
                    i+=1
                else: 
                    a.append(prev)
                    a.append(present)
                    if((i+2)>(length)):
                        a.append(letter[i+1])
                        i+=1
                    elif((i+2)==length):
                        a.append(letter[i+1])
                        i+=2
                    else: 
                        i+=2
            elif count_present != 1 and count_prev==1:
                if i == length - 1:
                    a.append(prev)
                    a.append(present)
                    i+=1
                else: 
                    a.append(prev)
                    # a.append(present)
                    if((i+1)>(length)):
                        a.append(letter[i+1])
                        i+=1
                    elif((i+1)==length):
                        a.append(letter[i+1])
                        i+=1
                    else: 
                        i+=1
            # else:
            #     if i == length - 1:
            #         a.append(prev)
            #         a.append(present)
            #         i+=1
            #     else: 
            #         a.append(prev)
            #         a.append(present)
            #         if((i+2)>(length)):
            #             a.append(letter[i+1])
            #             i+=1
            #         elif((i+2)==length):
            #             a.append(letter[i+1])
            #             i+=2
            #         else: 
            #             i+=2
    b=''
    for i in a:
        b+=i
    return b
    
        
