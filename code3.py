#!/usr/bin/python
import csv,glob
import pylab as plt
file_loc = '../wx_data/'
output_value = {}
count = 0
max_out = {}
min_out = {}
prec_out = {}
yr_max = {}
yr_min = {}
yr_prec = {}
year_list = (1985, 1986, 1987, 1988, 1989, 1990, 1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999, 2000, 2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009, 2010, 2011, 2012, 2013, 2014)
input_loc = open("../answers/YearlyAverages.out", "r")   
try:
    count = 0
except (IOError) as e:
        print('IO Error has occured while accesing the file ')
finally:
    pass

try:
    reader = csv.reader(input_loc, delimiter='\t')
    for row in reader:
        if count <30:
            station = row[0]
            max_out.update({int(row[1]) : float(row[2]) })
            min_out.update({int(row[1]) : float(row[3]) })
            prec_out.update({int(row[1]) : float(row[4]) })
            count = count +1
        else:
            max_value = max(max_out, key=max_out.get)
            min_value = max(min_out, key=min_out.get)
            prec_value = max(prec_out, key=prec_out.get)
            max_out = {}
            min_out = {}
            prec_out = {}
            yr_max.update({station : max_value})
            yr_min.update({station : min_value})
            yr_prec.update({station : prec_value})
            count = 0
finally:
    input_loc.close()

hist_max = list()
hist_min = list()
hist_prec = list()
for values in year_list:
    freq_max = sum( x == values for x in yr_max.values() )
    freq_min = sum( x == values for x in yr_min.values() )
    freq_prec = sum( x == values for x in yr_prec.values() )
    hist_max.append(freq_max)
    hist_min.append(freq_min)
    hist_prec.append(freq_prec)
    print ("%d \t %d \t %d \t %d" % (values, freq_max, freq_min, freq_prec))
months = [1,2,3,4,5,6,7,8,9,10,11,12]
plt.title("Frequency of highest annual average maximum temperature")
plt.xlabel("Year")
plt.ylabel("Temperature( in degree Celsius)")
plt.plot(year_list, hist_max, 'b-', label='Maximum Temperature')
plt.plot(year_list, hist_min, 'r-', label='Minimum Temperature')
plt.plot(year_list, hist_prec, 'g-', label='Total Precipitation')
plt.savefig('../answers/YearHistogram.png')
plt.show()
